# 💸 Personal Finance Visualizer

A clean, responsive web application for tracking personal finances — from transactions to budget insights.

---

## 📦 Tech Stack

- **Frontend:** Next.js 15 (App Router) + React
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) + Tailwind CSS
- **Charts:** Recharts (Bar & Pie)
- **Database:** MongoDB Atlas
- **Deployment:** Vercel (frontend + serverless API routes)

---

## 🚀 Features by Stage

### ✅ Stage 1: Basic Transaction Tracking
- Add/Edit/Delete transactions (amount, date, description)
- View all transactions in a list
- Monthly bar chart to visualize expenses
- Basic form validation

### ✅ Stage 2: Categories
- Predefined categories: Food, Transport, Bills, etc.
- Category-wise pie chart
- Dashboard summary cards:
  - Total monthly expenses
  - Most recent transactions
  - Top spending category

### ✅ Stage 3: Budgeting
- Set monthly budget per category
- Visual budget vs actual comparison (stacked bar chart)
- Overspending insights and alerts

---



---

## 📂 Folder Structure (Simplified)

src/
├── app/ # App Router pages + API
│ └── api/transactions/route.ts
├── components/ # UI and custom components
├── models/ # TypeScript models (Transaction, Budget)
├── lib/ # Utilities (optional)



---

## 🧪 How to Run Locally

### 1. Clone the repo

```bash
git clone https://github.com/your-username/finance-tracker.git
cd finance-tracker


npm install

MONGODB_URI=your_mongodb_connection_string


npm run dev


🌐 Live Demo
🔗 




👨‍💻 Author
Faizan Ahmed

Task completed as part of a full-stack internship assignment – built with ❤️ and React.