# **Random Raid Generator**

![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![](https://img.shields.io/badge/Apollo%20GraphQL-311C87?&style=for-the-badge&logo=Apollo%20GraphQL&logoColor=white) ![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E) ![](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)

## **What is this?**

**Random Raid Generator** is an application for randomizing your gameplay in a video game called *Escape From Tarkov*.

---

## **Where can I use it?**

The application is hosted [**here**](https://tarkov-gear-generator.onrender.com/).

---

## **Basic Functionality**

The data required is fetched from a **GraphQL API** at page load and saved into global state. The app has functions for randomizing an item from each category. Randomization of each item is initiated by the user pressing a button.

### **How the Randomization Works**:
- A list containing all the items from the category is passed to the function from the global state.
- A random item with an index ranging from `0` to the length of the list is selected and saved into the global state.
- The selected item is rendered in the UI.

**Important Note**: Since the API doesn't support querying random items, all items must be fetched at once. This can result in a slow page load for users with slower internet. If the API allowed, querying for random items individually would improve performance.

The user can also alter the randomization process, for example, forcing a fitting pair of headphones and headwear.

---

## **Testing & CI/CD**

- **Unit Testing**: Done with **Vitest** and **React Testing Library**.
- **E2E Testing**: Will be done using **Playwright**.
- **CI/CD**: Automated testing and deployment will be handled through **Github Actions** with deployment on **Render**.

---

## **The API?**

The API used is the free **GraphQL API** provided by [**TARKOV.DEV**](https://tarkov.dev/api).
