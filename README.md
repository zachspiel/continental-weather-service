![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![HTMX](https://img.shields.io/badge/%3C%2F%3EHTMX-blue?style=for-the-badge)

# Continental Weather Service

<img src="./src/static/images/logo.png" alt="Continental Weather Service Logo" height="200">

This project is built using Flask, HTMX, and Tailwind CSS to create a landing page for Continental Weather Service.

## Getting Started

1. Clone this repository:

```bash
git clone https://github.com/zachspiel/continental-weather-service.git
```

2. Navigate to the project directory:

```bash
cd continental-weather-service
```

### UI Setup

1. Install dependencies

```bash
npm install
```

### Server Setup

1. Create and active python venv

```bash
python3 -m venv venv
```

```bash
source venv/bin/scripts/active
```

2. Install dependencies

```bash
pip install -r requirements
```

3. Setup flask

```bash
export FLASK_APP=src/app
```

4. Run server

```bash
flask run --debug
```

## Configuration

A `.env` file is required with the following two values for nodemailer to work properly. Please see the [nodemailer documentation](https://nodemailer.com)
for more information.

```
EMAIL={your email}
PASS={your email password}
```
