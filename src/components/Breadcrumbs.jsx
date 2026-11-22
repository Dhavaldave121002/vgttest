import React from "react";

export default function Breadcrumbs() {
  return (
    <nav className="breadcrumb-nav" aria-label="Breadcrumb">
      <div className="container">
        <ol className="breadcrumb-list" itemScope itemType="https://schema.org/BreadcrumbList">
          <li className="breadcrumb-item" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="https://vertexglobaltech.in/" itemProp="item">
              <span itemProp="name">Home</span>
            </a>
            <meta itemProp="position" content="1" />
            <span aria-hidden="true">/</span>
          </li>
          <li className="breadcrumb-item" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="https://vertexglobaltech.in/website-development/" itemProp="item">
              <span itemProp="name">Services</span>
            </a>
            <meta itemProp="position" content="2" />
            <span aria-hidden="true">/</span>
          </li>
          <li className="breadcrumb-item current" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" aria-current="page">
            <span itemProp="name">Web Design Services Ahmedabad</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </div>
    </nav>
  );
}
