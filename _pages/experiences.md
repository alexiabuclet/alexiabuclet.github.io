---
   layout: page
   title: Expériences
   permalink: /experiences/
---

<div class="experiences-container">
     {% for experience in site.data.experiences %}
       <div class="experience-item">
         <h2 class="experience-title">{{ experience.title }}</h2>
         <div class="experience-company">
           <img src="{{ experience.logo | relative_url }}" alt="{{ experience.company }} logo" class="company-logo">
           <span class="company-name">
             {% if experience.company_url %}
               <a href="{{ experience.company_url }}" target="_blank" rel="noopener noreferrer">{{ experience.company }}</a>
             {% else %}
               {{ experience.company }}
             {% endif %}
           </span>
         </div>
         <p class="experience-description">{{ experience.description }}</p>
         
         {% if experience.projects %}
           <div class="projects-container">
             {% for project in experience.projects %}
               {% if project.url %}
                 <a href="{{ project.url }}" target="_blank" rel="noopener noreferrer" class="project-item">
                   <h4 class="project-title">{{ project.title }}</h4>
                   <img src="{{ project.image | relative_url }}" alt="{{ project.title }}" class="project-image">
                   <p class="project-description">{{ project.description }}</p>
                   <p class="project-client">{{ project.client }}</p>
                 </a>
               {% else %}
                 <div class="project-item">
                   <h4 class="project-title">{{ project.title }}</h4>
                   <img src="{{ project.image | relative_url }}" alt="{{ project.title }}" class="project-image">
                   <p class="project-description">{{ project.description }}</p>
                   <p class="project-client">{{ project.client }}</p>
                 </div>
               {% endif %}
             {% endfor %}
           </div>
         {% endif %}
       </div>
     {% endfor %}
</div>