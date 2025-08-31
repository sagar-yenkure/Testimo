# 🚀 Testimo

A modern SaaS-style project built with cutting-edge web technologies.  
Currently, this project is being developed as a **personal portfolio/resume project** to showcase engineering, product, and design skills.  

While not a commercial product today, the vision is that this could evolve into a **real SaaS business** in the future.  

---

## 📌 Current Status
- ✅ 80–90% of the core functionality is implemented.  
- 🔄 Open to small contributions for **learning purposes** and **resume-building**.  
- 🚫 Not currently a company, startup, or funded SaaS product.  

---

## 🤝 Contributions
Contributions are welcome, but please note:  

- Contributions are **strictly for learning and portfolio-building purposes**.  
- Ownership of the project and its IP remains with the **original author (the repository owner)**.  
- If in the future this evolves into a revenue-generating SaaS business, contributors may be offered **acknowledgment, collaboration roles, or compensation at the founder’s discretion**.  
- By contributing, you agree that contributions do **not imply co-ownership or financial rights**.  

👉 Please read [CONTRIBUTORS.md](./CONTRIBUTORS.md) and [CONTRIBUTING.md](./CONTRIBUTING.md) for full details.  

---

## 📜 License
This project is licensed under the **Apache 2.0 License**.  
See [LICENSE](./LICENSE) for details.  

---

## 📦 NPM Package
This project also includes an **NPM package** published separately.  
- The package is open-source under the **Apache 2.0 License**.  
- It may be used freely in other projects as per the license terms.  
- Contributions to the package follow the same rules as this repository.  

---

## 📦 Tech Stack
- **Frontend**: Next.js + Tailwind CSS  
- **Backend**: Next.js API Routes, PostgreSQL  
- **Database ORM**: Prisma  
- **Storage**: AWS S3  
- **Containerization**: Docker & Docker Compose  

---

## ⚙️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/sagar-yenkure/Testimo.git
cd testimo
```

## 2. Run with Docker
Make sure you have Docker & Docker Compose installed.
Then run:
```bash
docker compose up -d
```

## 3. Setup Environment Variables
Create a .env file in the project root with the following values:
```bash
NEXT_PUBLIC_HOST="https://localhost:3000"

DATABASE_URL=postgresql://postgres:postgres@localhost:5432/postgres-testimo

AUTH_SECRET=""

# AWS Keys
AMAZON_REGION=""
AMAZON_ACCESS_KEY_ID=""
AMAZON_SECRET_ACCESS_KEY=""
AMAZON_BUCKET_NAME="testimo"
```

## 4. Run Migrations
```bash
npx prisma migrate dev
```

## 5. Start Development
```bash
npm install
npm run dev
```
