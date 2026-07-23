# 🌐 AWS Cloud Portfolio Website

[![Deploy Portfolio](https://github.com/jahid2600/aws-cloud-portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/jahid2600/aws-cloud-portfolio/actions/workflows/deploy.yml)

A responsive personal portfolio website built using **HTML5, CSS3, and JavaScript**, deployed on **AWS**, automated with **GitHub Actions CI/CD**, and enhanced with **serverless AWS backend features**.

This project demonstrates static website hosting, custom domain setup, HTTPS, CI/CD automation, serverless APIs, database integration, email handling, and basic cloud monitoring.

---

## 🚀 Live Demo

🌍 **Website:** https://jahidalam.cloud

---

## 📌 Project Versions

### ✅ Version 1.0 — Static Website Hosting

In Version 1, I built and deployed a responsive personal portfolio website using static web technologies and AWS hosting services.

**Implemented:**

- Designed portfolio using HTML5, CSS3, and JavaScript
- Hosted static website files on Amazon S3
- Configured Amazon CloudFront for global content delivery
- Improved website speed and reliability using CDN-based delivery

---

### ✅ Version 2.0 — Custom Domain, HTTPS and CI/CD

In Version 2, I made the portfolio production-ready by adding a custom domain, HTTPS, and automated deployment.

**Implemented:**

- Configured custom domain `jahidalam.cloud` using Amazon Route 53
- Enabled HTTPS using AWS Certificate Manager
- Connected CloudFront with custom domain and SSL/TLS certificate
- Created GitHub Actions deployment workflow
- Configured AWS OIDC Identity Provider
- Created IAM Role for GitHub Actions
- Used GitHub Secrets and Variables for deployment configuration
- Automated deployment to Amazon S3
- Automated CloudFront cache invalidation after deployment
- Removed long-term AWS access keys from the CI/CD process

---

### ✅ Version 3.0 — Serverless Portfolio Application

In Version 3, I added real backend functionality using AWS serverless services.

**Implemented:**

- Added serverless visitor counter
- Created DynamoDB table to store visitor count
- Created Lambda function to update and return visitor count
- Created API Gateway route `GET /visitor-count`
- Integrated visitor counter with frontend JavaScript
- Added serverless contact form
- Created Lambda function to process contact form messages
- Used Amazon SES to send contact form messages to email inbox
- Created API Gateway route `POST /contact`
- Added frontend form validation using JavaScript
- Added backend validation inside Lambda
- Added honeypot spam protection for contact form
- Configured CORS for local testing and live domain
- Used CloudWatch Logs to monitor and debug Lambda executions
- Fixed dark/light theme toggle and asset caching issues

---

## 🏗️ Final Architecture

```text
User visits jahidalam.cloud
        ↓
Route 53
        ↓
CloudFront
        ↓
Amazon S3
        ↓
Static Portfolio Website
        ↓
Frontend JavaScript

Feature 1: Visitor Counter

GET /visitor-count
        ↓
Amazon API Gateway
        ↓
AWS Lambda
        ↓
Amazon DynamoDB
        ↓
Visitor count displayed on website

Feature 2: Contact Form

POST /contact
        ↓
Amazon API Gateway
        ↓
AWS Lambda
        ↓
Amazon SES
        ↓
Email received in inbox

Monitoring and Debugging

AWS Lambda
        ↓
Amazon CloudWatch Logs
```

---

## 🛠️ Tech Stack

### Frontend

- HTML5
- CSS3
- JavaScript

### AWS Services

- Amazon S3
- Amazon CloudFront
- Amazon Route 53
- AWS Certificate Manager
- AWS IAM
- Amazon API Gateway
- AWS Lambda
- Amazon DynamoDB
- Amazon SES
- Amazon CloudWatch

### DevOps and Tools

- Git
- GitHub
- GitHub Actions
- AWS OIDC
- CI/CD Pipeline

---

## ✨ Key Features

- Responsive personal portfolio website
- Custom domain with HTTPS
- Automated CI/CD deployment
- Serverless visitor counter
- Serverless contact form
- Contact form validation
- Honeypot spam protection
- Dark/light theme toggle
- CloudFront cache invalidation
- CloudWatch Logs for debugging
- Secure deployment without long-term AWS access keys

---

## 🔐 Security Highlights

- Used AWS OIDC with GitHub Actions instead of storing long-term AWS access keys
- Created IAM Role for secure CI/CD deployment
- Used least-privilege IAM permissions for deployment and Lambda access
- Stored sensitive email configuration in Lambda environment variables
- Configured CORS for frontend-to-API communication
- Added backend validation to prevent invalid form submissions
- Added honeypot field to reduce bot/spam submissions

---

## ⚙️ CI/CD Workflow

The deployment pipeline runs automatically when changes are pushed to the main branch.

```text
Developer pushes code
        ↓
GitHub Repository
        ↓
GitHub Actions workflow
        ↓
AWS OIDC authentication
        ↓
IAM Role assumed securely
        ↓
Files synced to Amazon S3
        ↓
CloudFront cache invalidated
        ↓
Latest website version becomes live
```

---

## 🧩 Serverless Features

### Visitor Counter

The visitor counter tracks portfolio visits using a serverless backend.

```text
Frontend JavaScript
        ↓
GET /visitor-count
        ↓
API Gateway
        ↓
Lambda
        ↓
DynamoDB
```

### Contact Form

The contact form allows visitors to send messages directly from the website.

```text
Frontend Contact Form
        ↓
POST /contact
        ↓
API Gateway
        ↓
Lambda
        ↓
Amazon SES
        ↓
Email Inbox
```

---

## 📁 Project Structure

```text
aws-cloud-portfolio/
│
├── index.html
├── README.md
├── CHANGELOG.md
│
├── assets/
│   ├── images/
│   └── documents/
│
├── css/
│   ├── design-system.css
│   ├── footer.css
│   └── other style files
│
├── js/
│   ├── main.js
│   ├── theme.js
│   └── other script files
│
└── .github/
    └── workflows/
        └── deploy.yml
```

---

## 📊 Monitoring and Debugging

CloudWatch Logs were used to monitor and debug Lambda function executions.

**Monitored components:**

- Visitor counter Lambda logs
- Contact form Lambda logs
- API request errors
- Lambda execution errors
- CORS-related issues
- SES email sending issues

This helped verify that the backend functions were executing correctly and that the serverless features were working as expected.

---

## 🧠 What I Learned

Through this project, I learned:

- How to host a static website on Amazon S3
- How to use CloudFront for content delivery
- How to configure a custom domain using Route 53
- How to enable HTTPS using AWS Certificate Manager
- How to automate deployment using GitHub Actions
- How to use AWS OIDC for secure CI/CD
- How to create IAM roles and policies
- How to build serverless APIs using API Gateway and Lambda
- How to store data in DynamoDB
- How to send emails using Amazon SES
- How to configure CORS for frontend API calls
- How to debug Lambda functions using CloudWatch Logs
- How to structure a real-world cloud portfolio project

---

## 📌 Current Status

**Completed Version:** `v3.0`

**Final Version 3.0 includes:**

- Static website hosting
- Custom domain and HTTPS
- CI/CD automation
- Serverless visitor counter
- Serverless contact form
- Form validation and spam protection
- CloudWatch logging and debugging

---

## 🚀 Future Improvements

Possible future improvements:

- Add CloudWatch alarms for Lambda errors
- Store contact form messages in DynamoDB
- Add Terraform Infrastructure as Code
- Add API Gateway throttling
- Add custom domain for API Gateway
- Add monitoring dashboard
- Improve accessibility and SEO

---

## 👨‍💻 Author

**MD JAHID ALAM**

AWS Certified Cloud Practitioner  
Aspiring AWS Cloud Engineer  
Building real-world AWS Cloud and DevOps projects

🌍 Portfolio: https://jahidalam.cloud
