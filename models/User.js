const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  name: {
    type: String,
    required: true
  },
  avatar: String,
  bio: String,
  
  subscription: {
    type: {
      type: String,
      enum: ['free', 'pro', 'enterprise'],
      default: 'free'
    },
    status: {
      type: String,
      enum: ['active', 'inactive', 'expired'],
      default: 'active'
    },
    stripeCustomerId: String,
    stripeSubscriptionId: String,
    startDate: Date,
    endDate: Date,
    renewalDate: Date
  },
  
  usage: {
    promptsCopied: { type: Number, default: 0 },
    apiCalls: { type: Number, default: 0 },
    maxDailyCopies: { type: Number, default: 5 },
    maxApiCalls: { type: Number, default: 50 }
  },
  
  apiKey: String,
  savedPrompts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Prompt' }],
  createdPrompts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Prompt' }],
  
  role: {
    type: String,
    enum: ['user', 'creator', 'admin'],
    default: 'user'
  },
  
  creatorStats: {
    totalPrompts: { type: Number, default: 0 },
    totalDownloads: { type: Number, default: 0 },
    totalEarnings: { type: Number, default: 0 },
    rating: { type: Number, default: 0 }
  },
  
  isVerified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, { timestamps: true });

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

// Method to compare passwords
userSchema.methods.comparePassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

// Method to generate API key
userSchema.methods.generateApiKey = function() {
  this.apiKey = require('crypto').randomBytes(32).toString('hex');
  return this.apiKey;
};

module.exports = mongoose.model('User', userSchema);
