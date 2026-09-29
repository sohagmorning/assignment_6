# 💪 B14-A6-Fit Log

--- 

## 📅 Deadline For 60 marks: 26 September | ⏱️11:59PM
## 📅 Deadline For 50 marks: 27 September | ⏱️11:59PM
## 📅 Deadline for 30 marks: Any time after 27 September 2026

--- 
# API's 

Fitlog Api:
All data:
https://api.abcz.workers.dev/api/fitlog


Details/Single Data:
https://api.abcz.workers.dev/api/fitlog/:id

# Alternative APi:
All data:
https://api.api-store.workers.dev/api/fitlog

Single Data:
https://api.api-store.workers.dev/api/fitlog/:id

## 🐣 Basic Requirements (Must Do for Everyone)
- Your app must work on all screen sizes — mobile, tablet, and desktop
- Your app must run without any errors after deployment
- Add a nice README.md file with your project name, description, technologies used, and features(minimum 5)

--- 


# 🔧 Main Requirements — 50 Marks


### 1. 🔝 Navbar

- Design the Navbar exactly like the Figma design
  - Saved badge = pill with outline/border only.
--- 
- Subtitle: *"FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up."*
- A primary **CTA button with an icon**: **"BROWSE WORKOUTS"**.
- A **banner/hero image** on the right side.
- The badge numbers reflect the number of items currently in **Today's Plan** and **Saved**.( See Requirements Below)

- Heading: **"THE LIBRARY"** with subtitle **"Twelve lifts covering every major muscle group."**
  - 🏷️ Category tag pills (e.g. `CHEST`, `ARMS`)
  - 📛 Workout name (e.g. "BARBELL BENCH PRESS")
  - 🖇️ Equipment line (e.g. "Barbell, Bench")
  - 🔴 Stats row with icons: duration (`25 min`), calories (`180 kcal`), rating (`4.8`)
- 🧭 Clicking a card navigates the user to that workout's **Detail Page**.

### 4. Workout Details Page — Layout (two-column, follow the design)
- A large image/illustration of the workout fills the column.
- Category tags: `Chest`, `Arms`
- **Key Specs table/panel** with label + value rows:
- **INSTRUCTIONS** section: ordered list of 4 steps (number + text)
- **Call-to-action buttons:**
  - Primary button: **"Add to today's plan"** (with icon)

### 5. Details Page — Button Functionality
- Clicking **"Add to today's plan"**:
  - Increments the "Plan" badge counter in the navbar.
  - Shows a **toast notification** (e.g. "Added to today's plan").
- Clicking **"Save for later"**:
  - Increments the "Saved" badge counter in the navbar.
  - Shows a **toast notification**.
- On the **My Plan** page, each planned workout card has:
- **Tabs**: `Today's Plan` / `Saved` (active tab highlighted).

- **Left**: brand logo icon + **FITLOG**.
--- 

#	Requirement
- Add a 404 Page for any unknown/invalid route
- Show a relevant toast notification when the detail's page button.
- Make sure reloading any page after deployment does not cause an error

--- 

# Challenge Requirements — 10 Marks

### C1. - **Sort dropdown**: 
- Add a well-designed `README.md` that includes:
  - Project name

### C3. - On the **My Plan** page, each planned workout card has:
  - **"Mark as Done"** button (with check icon) → marks the workout done, shows a toast.
  - **Remove (X)** button → removes the workout, shows a toast.

## Optional (No Marks — Highly Recommended)
- Persist the plan/saved data in `localStorage` so it survives a page reload.
- Search the My Plan / library entries by workout name or tag.
- Disable "Add to today's plan" when the plan already contains 5 lifts (the cap mentioned in the subtitle).
### 🛠️ Technologies to Use
Technology	Purpose
- Next.js	Build the UI
- App router(Next.js) +	Handle page navigation
- Tailwind CSS + Any component library	Styling and responsiveness

### 🚀 Deployment
Deploy your project on Vercel, Netlify, Cloudflare Pages, or anywhere else before submitting.

## 📬 Submission
Fill in both links before submitting:

- Live Link:
- GitHub Repository Link:
