# 🌐 AWS Cloud Portfolio Website

[![Deploy Portfolio](https://github.com/jahid2600/aws-cloud-portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/jahid2600/aws-cloud-portfolio/actions/workflows/deploy.yml)

A modern, responsive personal portfolio website built using **HTML, CSS, and JavaScript**, deployed on **Amazon Web Services**, and automated using **GitHub Actions CI/CD**.

This project is part of my journey toward becoming an **AWS Cloud Engineer** and is being built step-by-step as a real-world cloud portfolio project.

---

## 🚀 Live Demo

🌍 **Website:** https://jahidalam.cloud

---

## 📌 Project Versions

### ✅ Version 1.0 — Static Website Hosting on AWS

In Version 1, I built and deployed a personal portfolio website using:

* HTML
* CSS
* JavaScript
* Amazon S3
* Amazon CloudFront

The website was hosted as a static website using **Amazon S3**, and **CloudFront** was used for faster global content delivery.

---

### ✅ Version 2.0 — Custom Domain + HTTPS

In Version 2, I connected my portfolio website with a custom domain and secured it using HTTPS.

Implemented services:

* Amazon Route 53
* AWS Certificate Manager
* Amazon CloudFront
* Custom Domain: `jahidalam.cloud`
* HTTPS using SSL/TLS certificate

This version made the portfolio more professional, secure, and production-ready.

---

### ✅ Version 3.0 — CI/CD Automation with GitHub Actions

In Version 3, I automated the deployment process using **GitHub Actions** and AWS **OIDC authentication**.

Now, whenever changes are pushed to the GitHub repository, the workflow automatically deploys the latest website files to Amazon S3 and refreshes the CloudFront distribution.

Implemented CI/CD components:

* GitHub Actions workflow
* AWS OIDC Identity Provider
* IAM Role for GitHub Actions
* IAM Policy with required deployment permissions
* GitHub Repository Secrets
* GitHub Repository Variables
* Automated S3 deployment
* CloudFront cache invalidation
* Secure deployment without long-term AWS access keys

---

## 🏗️ Architecture Overview

```text
Developer
   |
   | Push code
   v
GitHub Repository
   |
   | GitHub Actions Workflow
   v
AWS OIDC Authentication
   |
   v
IAM Role: GitHubActionsPortfolioDeployRole
   |
   v
Amazon S3 Bucket
   |
   v
Amazon CloudFront
   |
   v
Route 53 + Custom Domain + HTTPS
   |
   v
Users access website at jahidalam.cloud
```

---

## 🛠️ Tech Stack

### Frontend

* HTML
* CSS
* JavaScript

### AWS Services

* Amazon S3
* Amazon CloudFront
* Amazon Route 53
* AWS Certificate Manager
* AWS IAM
* AWS OIDC

### DevOps / Automation

* GitHub
* GitHub Actions
* CI/CD Pipeline
* GitHub Secrets
* GitHub Variables

---

## 🔐 Security Improvements in Version 3

This project uses **OIDC-based authentication** between GitHub Actions and AWS.

Instead of storing long-term AWS access keys in GitHub, GitHub Actions securely assumes an IAM Role using OIDC.

Benefits:

* No permanent AWS access keys stored in GitHub
* More secure deployment process
* Least-privilege IAM permissions
* Production-style CI/CD setup

---

## ⚙️ CI/CD Workflow Summary

The deployment workflow performs the following steps:

1. Checkout the latest repository code
2. Authenticate with AWS using OIDC
3. Sync website files to the S3 bucket
4. Invalidate CloudFront cache
5. Deploy the latest version of the portfolio website

---

## 📁 Project Structure

```text
aws-cloud-portfolio/
│
├── index.html
├── README.md
├── assets/
│   ├── images/
│   └── documents/
│
├── css/
│   └── style files
│
├── js/
│   └── script files
│
└── .github/
    └── workflows/
        └── deploy.yml
```

---

## 🎯 What I Learned

Through this project, I learned:

* How to host a static website on Amazon S3
* How to distribute content globally using CloudFront
* How to connect a custom domain using Route 53
* How to enable HTTPS using AWS Certificate Manager
* How to create IAM policies and IAM roles
* How to use GitHub Actions for CI/CD
* How to use AWS OIDC for secure deployments
* How to automate deployment from GitHub to AWS

---

## 📌 Current Version

**Version 3.0 — CI/CD Automation Completed**

The portfolio website is now deployed using an automated CI/CD pipeline with GitHub Actions and AWS.

---

## 🚧 Upcoming Version

### Version 4.0 — Visitor Counter

Planned features:

* Serverless visitor counter
* Amazon API Gateway
* AWS Lambda
* Amazon DynamoDB
* JavaScript API integration
* Real-time visitor count on portfolio website

---

## 👨‍💻 Author

**MD JAHID ALAM**

AWS Certified Cloud Practitioner
Aspiring AWS Cloud Engineer
Building real-world AWS Cloud and DevOps projects

🌍 Portfolio: https://jahidalam.cloud
