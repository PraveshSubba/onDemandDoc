# OnDemandDoc

OnDemandDoc is a full-stack web application designed to connect patients with doctors for online consultations, appointment bookings, and healthcare management. The platform features separate interfaces for patients, doctors, and administrators, providing a seamless experience for all users.

## Features

- **Patient Portal:**
  - Browse and search for doctors by specialty
  - Book and manage appointments
  - View doctor profiles and reviews
  - Secure login and registration

- **Doctor Portal:**
  - Manage appointments and availability
  - View patient details
  - Update profile and specialties

- **Admin Dashboard:**
  - Manage users (patients and doctors)
  - View platform statistics
  - Approve or reject doctor registrations

- **Other Features:**
  - Responsive and modern UI
  - Secure authentication
  - Integration with payment gateways (e.g., Stripe, Razorpay)
  - Cloud image uploads (Cloudinary)

## Tech Stack

- **Frontend:** React, Redux Toolkit, Vite
- **Backend:** Node.js, Express.js, MongoDB
- **Cloud & Storage:** Cloudinary (for image uploads)
- **Payment:** Stripe, Razorpay

## Getting Started

### Prerequisites
- Node.js (v16 or above)
- npm or yarn
- MongoDB instance (local or cloud)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/onDemandDoc.git
   cd onDemandDoc
   ```

2. **Install dependencies for each part:**
   - **Frontend:**
     ```sh
     cd frontend
     npm install
     ```
   - **Admin:**
     ```sh
     cd ../admin
     npm install
     ```
   - **Backend:**
     ```sh
     cd ../backend
     npm install
     ```

3. **Set up environment variables:**
   - Copy `.env.example` to `.env` in each folder and fill in the required values.

4. **Run the applications:**
   - **Backend:**
     ```sh
     npm start server
     ```
   - **Frontend:**
     ```sh
     npm run dev
     ```
   - **Admin:**
     ```sh
     npm run dev
     ```

## Folder Structure

- `frontend/` - Patient-facing React app
- `admin/` - Admin dashboard React app
- `backend/` - Node.js/Express API server



