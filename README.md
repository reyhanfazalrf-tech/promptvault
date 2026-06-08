# PromptVault 🚀

> The Open Source Prompt Library - AI prompts marketplace with monetization features

## 🎯 Features

✅ **Browse & Search** - 300+ AI prompts across 10 categories  
✅ **User Authentication** - JWT-based auth system  
✅ **Subscription Tiers** - Free, Pro ($9.99/mo), Enterprise (custom)  
✅ **Premium Prompts** - Creators can monetize their prompts  
✅ **API Access** - Programmatic access for developers  
✅ **Ratings & Reviews** - Community feedback system  
✅ **Mobile Optimized** - Fully responsive design  
✅ **Dark/Light Theme** - Built-in theme switcher  

## 💰 Monetization Models

### 1. Subscription Plans
- **Free**: Browse, limited copies/day
- **Pro ($9.99/mo)**: Unlimited access, API (50 calls/day)
- **Enterprise (Custom)**: Everything + white-label

### 2. Premium Prompts
- Creators upload premium prompts
- Set custom prices ($0.99 - $99.99)
- PromptVault takes 30% commission

### 3. API Monetization
- Pay-as-you-go: $0.001 per API call
- Subscription tiers with included calls

## 🛠️ Tech Stack

- **Backend**: Node.js + Express.js
- **Database**: MongoDB
- **Authentication**: JWT
- **Payments**: Stripe (to be configured)
- **Frontend**: HTML5 + CSS3 + Vanilla JS

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Environment
```bash
cp .env.example .env
# Edit .env with your MongoDB & Stripe keys
```

### 3. Start Server
```bash
npm run dev
```

Server runs on `http://localhost:5000`

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - Create account
- `POST /api/auth/login` - Login
- `GET /api/auth/verify` - Verify token

### Prompts
- `GET /api/prompts` - Get all prompts
- `GET /api/prompts/:id` - Get single prompt
- `POST /api/prompts` - Create prompt
- `PUT /api/prompts/:id` - Update prompt
- `DELETE /api/prompts/:id` - Delete prompt

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update profile
- `GET /api/users/api-key` - Get API key
- `POST /api/users/save-prompt/:id` - Save prompt
- `DELETE /api/users/unsave-prompt/:id` - Unsave prompt

### Ratings
- `POST /api/ratings/:promptId` - Add rating
- `GET /api/ratings/:promptId` - Get ratings

## 📊 Database Setup

1. Create MongoDB Atlas account: https://mongodb.com/atlas
2. Create free cluster
3. Get connection string
4. Add to `.env` as `MONGODB_URI`

## 💳 Stripe Setup

1. Create Stripe account: https://stripe.com
2. Get API keys from dashboard
3. Add to `.env`:
   - `STRIPE_SECRET_KEY`
   - `STRIPE_PUBLIC_KEY`

## 🤝 Contributing

1. Fork repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open Pull Request

## 📝 License

MIT License - see LICENSE for details

## 🙋 Support

- **GitHub Issues**: Report bugs
- **Email**: support@promptvault.dev

---

**Built with ❤️ - Give us a ⭐ if you like PromptVault!**
