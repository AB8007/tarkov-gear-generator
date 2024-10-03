# **Random Raid Generator**

![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)![](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white)![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)![](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

## **What is this?**

**Random Raid Generator** is an application for randomizing your gameplay in a video game called _Escape From Tarkov_.

---

## **Where can I use it?**

**Important**: Due to the free Render web service instance, the backend has up to 50 seconds of response time if it has not been used in the last 50 minutes

The application is hosted [**here**](https://tarkov-gear-generator.onrender.com/).

---

## **What techs were used**

Frontend's UI is built with **React**, global state is managed with [**Zustand**](https://zustand.docs.pmnd.rs/getting-started/introduction) and API queries are handled with **React Query**.

I began to work on this project when I was still learning React, that's why its built in JavaScript. Previously Redux Toolkit was used with Apollo GraphQL but it proved to be a bit too overkill and heavy for a project of this size and it just made more sense to move the application logic from the frontend to the backend.

---

## **Basic Functionality**

Actual "business logic" is mostly found on the backend side. Repo for the backend can be found [**here**](https://github.com/joonaspo/tgg-backend).

> The data required is fetched from a **GraphQL API** at set intervals of 60 minutes and saved into a redis database. Because the actual game has set limitations to what items can be worn together, the app's randomization logic prioritizes for example a headwear over headphones.
>
> - In practice this means a headwear item is randomized first, and depending on that items `blocksHeadphones: boolean` property, random headphones are randomized, or not.
> - The same logic is applied to a chest rig with its `type: "Chest" | "Armored"` property. As with headwear, with certain chest rigs, no separate body armor can be worn.

### **How the App Works**:

- A GET-request is sent to the API initiated either by page load or the user pressing a button
- The backend respons with an object containing a (pseudo)random item for each category and a location
- The received items and the map are rendered in the UI.

---

## **Testing & CI/CD**

- **Unit Testing**: Done with **Vitest** and **React Testing Library**.
- **E2E Testing**: Will be done using **Playwright**.
- **CI/CD**: Automated testing and deployment is handled through **Github Actions** pipeline with deployment on **Render**.

---

## **The API?**

The API used by the application is found [**here**](https://tgg-backend.onrender.com/api/getRandomItems). It returns a JSON object with items and map data.
