[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/7C3xAGjq)
# 🌐 Personal Portfolio Web Project — *Enda Şenol*

## 🎯 Project Overview
This is a personal portfolio website developed to present the academic background, technical competencies, and geospatial engineering projects of **Enda Şenol**, a Geomatics Engineering student at Hacettepe University. The website applies modern web technologies, interactive design elements, animated visuals, and a professional user interface structure to highlight GIS-related skills and project experience.

---

## 💻 Technologies Used

| Technology | Purpose |
|-----------|---------|
| **HTML5** | Structural foundation of the website |
| **CSS3 (Glassmorphism, Glow Effects)** | Modern, responsive UI and visual effects |
| **JavaScript (Vanilla)** | Dynamic interactivity and map control |
| **OpenLayers** | Intended map technology (GIS-based interactive mapping) |
| **Google Maps Embed API** | Implemented as a fallback due to DNS/CDN blocking issues affecting OpenLayers |

---

## 🌍 Map Integration Challenge

### 🔹 Initial Plan:
The project originally aimed to use **OpenLayers**, a powerful open-source web mapping library used in professional GIS applications, to display **Hacettepe University Beytepe Campus** interactively.

### 🔹 Issue Encountered:
- OpenLayers relies on external CDN servers (such as jsDelivr and unpkg) to load essential files.
- Due to **DNS/CDN restrictions** in the network environment, these files (`ol.js`, `ol.css`) could not be loaded.
- Multiple versions and fallback techniques were tested, but the network blocked all CDN-based resources.

### ✅ Final Solution:
To ensure platform stability and maintain functionality, the map component was replaced with the **Google Maps Embed API**. This allowed the project to remain fully operational, delivering accurate mapping visualization without external dependency failures.

> This demonstrates engineering adaptability and the ability to apply strategic solutions under network constraints.

---

## 📂 Website Sections

### 🔸 About
Presents education background, professional experience, and personal profile with embedded image and animated visuals.

### 🔸 Technologies
Displays technical skills (GIS, programming, geospatial tools) as visual progress indicators with proficiency percentages.

### 🔸 Projects
Showcases engineering and geospatial projects:
- **Shopping Mall Web Scraping & API**
- **3D Mining Site Modeling**
- **Women Safety Mapping Application**

Each project includes an image, description, and objective.

---

## 🚀 Key Outcomes

- Developed front-end design and responsive web architecture
- Gained experience in web-based geospatial visualization
- Solved real-world DNS/CDN network constraints through fallback design
- Demonstrated problem-solving and adaptability under technical limitations

---

## 🔮 Future Enhancements

| Planned Feature | Description |
|----------------|-------------|
| Local OpenLayers Integration | Adding OpenLayers as a self-hosted library to bypass CDN restrictions |
| WMS/WFS Service Integration | Using Geoserver for real-time GIS layers |
| PostgreSQL + PostGIS | Backend spatial data processing |
| Interactive GIS Tools | User-based spatial querying and analysis |

---

## 🤖 AI Assistance Acknowledgment
This documentation and certain UI elements were refined with the assistance of **AI (ChatGPT)** to enhance language clarity and interface optimization.  
All source code, technical decisions, and original project content were independently developed by **Enda Şenol**.


---

## 👨‍💻 Developed By
**Enda Şenol**  
Geomatics Engineering Student — Hacettepe University  
🔗 GitHub Profile: [https://github.com/endassenol](https://github.com/endassenol)

---
✨ *Thank you for visiting this portfolio project! Continuous updates and improvements are in progress.*
