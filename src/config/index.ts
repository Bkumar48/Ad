export const NAV_ITEMS = [
  {
    label: "Home",
    value: "home" as const,
    href: "/",
  },
  {
    label: "Our Story",
    value: "story" as const,
    href: "#",
    childrens: [
      {
        name: "About",
        href: "/about",
      },
      {
        name: "Career",
        href: "/career",
      },
    ],
  },
  {
    label: "Services",
    value: "services" as const,
    href: "#",
    subItems: [
      {
        name: "Web Designing & Development",
        href: "/web-designing-and-development",
        subItems: [
          {
            name: "WordPress Development",
            href: "/services/web-designing-and-development/wordpress-development",
          },
          {
            name: "Custom web development",
            href: "/services/web-designing-and-development/custom-web-development",
          },
          {
            name: "WooCommerce",
            href: "/services/web-designing-and-development/woocommerce",
          },
          {
            name: "Shopify Development",
            href: "/services/web-designing-and-development/shopify-development",
          },
          {
            name: "PHP Development",
            href: "/services/web-designing-and-development/php-development",
          },
          {
            name: "Laravel Development",
            href: "/services/web-designing-and-development/laravel-development",
          },
        ],
      },
      {
        name: "Search Engine Optimization (SEO)",
        href: "/services/search-engine-optimization",
        subItems: [
          {
            name: "Technical SEO Analysis",
            href: "/services/search-engine-optimization/technical-seo-analysis",
          },
          {
            name: "Online Reputation Management",
            href: "/services/search-engine-optimization/online-reputation-management",
          },
          {
            name: "Competitor Backlink Outreach",
            href: "/services/search-engine-optimization/competitor-backlink-outreach",
          },
          {
            name: "Guest Post Outreach",
            href: "/services/search-engine-optimization/guest-post-outreach",
          },
          {
            name: "On-Page and Off-Page Optimization",
            href: "/services/search-engine-optimization/on-page-and-off-page-optimization",
          },
          {
            name: "Local SEO (GBP)",
            href: "/services/search-engine-optimization/local-seo",
          },
        ],
      },

      {
        name: "Paid Media & Advertising (PPC)",
        href: "/services/paid-media-and-advertising",
        subItems: [
          {
            name: "AdWords Audit",
            href: "/services/paid-media-and-advertising",
          },
          {
            name: "Keyword Research",
            href: "/services/paid-media-and-advertising",
          },
          {
            name: "Campaign Optimization",
            href: "/services/paid-media-and-advertising",
          },
          {
            name: "PPC Bid Management",
            href: "/services/web-designing-and-development/shopify-development",
          },
          {
            name: "Customized Ad Extensions",
            href: "/services/web-designing-and-development/php-development",
          },
          {
            name: "Creative Display Ads",
            href: "/services/web-designing-and-development/laravel-development",
          },
          {
            name: "Local Targeting Strategies",
            href: "/services/web-designing-and-development/laravel-development",
          },
          {
            name: "Conversion Tracking",
            href: "/services/web-designing-and-development/laravel-development",
          },
        ],
      },
      {
        name: "Compelling Content Marketing",
        href: "/services/compelling-content-marketing",
        subItems: [
          {
            name: "Content Audit",
            href: "/services/compelling-content-marketing",
          },
          {
            name: "Blogs & Articles",
            href: "/services/compelling-content-marketing",
          },
          {
            name: "Social Media Posts",
            href: "/services/compelling-content-marketing",
          },
          {
            name: "Infographics",
            href: "/services/compelling-content-marketing",
          },
          {
            name: "Email Marketing Draft",
            href: "/services/compelling-content-marketing",
          },
          {
            name: "Website Copies",
            href: "/services/compelling-content-marketing",
          },
          {
            name: "Guest Posting",
            href: "/services/compelling-content-marketing",
          },
          {
            name: "Google Business Profile Posts",
            href: "/services/compelling-content-marketing",
          },
        ],
      },
      {
        name: "Digital Creative & Logo Design",
        href: "/services/digital-creative-and-logo-design",
        subItems: [
          {
            name: "Website Graphics",
            href: "/services/digital-creative-and-logo-design",
          },
          {
            name: "Website Logo",
            href: "/services/digital-creative-and-logo-design",
          },
          {
            name: "Digital Broucher",
            href: "/services/digital-creative-and-logo-design",
          },
          {
            name: "Email Marketing Graphics",
            href: "/services/digital-creative-and-logo-design",
          },
          {
            name: "Business card, Letterhead etc.",
            href: "/services/digital-creative-and-logo-design",
          },
          {
            name: "Poster, Banner, Flyer and Signage",
            href: "/services/digital-creative-and-logo-design",
          },
          {
            name: "Social Media Graphics",
            href: "/services/digital-creative-and-logo-design",
          },
        ],
      },
      {
        name: "Strategic Social Media Management",
        href: "/services/strategic-social-media-management",
        subItems: [
          {
            name: "Social Media Optimization",
            href: "/services/strategic-social-media-management/social-media-optimization",
          },
          {
            name: "Social Media Marketing",
            href: "/services/strategic-social-media-management/social-media-marketing",
          },
        ],
      },
    ],
  },
  {
    label: "Resources",
    value: "resources" as const,
    href: "#",
    childrens: [
      {
        name: "Case Studies",
        href: "/case-studies",
      },
      {
        name: "Blog",
        href: "/blog",
      },
    ],
  },
  {
    label: "Contact Us",
    value: "contact" as const,
    href: "/contact",
  },
];
