const employees = [
  {
    "employees": [
      {
        "id": "E001",
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
          {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "title": "Submit Expense Report",
            "description": "Submit Q2 travel and food expenses.",
            "date": "2025-06-01",
            "category": "Finance"
          },
          {
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false,
            "title": "Project Kickoff Meeting",
            "description": "Initial sync with the new client.",
            "date": "2025-05-30",
            "category": "Meetings"
          },
          {
            "active": false,
            "newTask": false,
            "completed": false,
            "failed": true,
            "title": "Update CRM Data",
            "description": "Failed to update sales pipeline data.",
            "date": "2025-05-29",
            "category": "Sales"
          }
        ]
      },
      {
        "id": "E002",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
          {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "title": "Fix CSS Bugs",
            "description": "Resolve layout issues in mobile view.",
            "date": "2025-06-03",
            "category": "Development"
          },
          {
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false,
            "title": "Push Code to Staging",
            "description": "Deploy features to staging environment.",
            "date": "2025-05-31",
            "category": "Deployment"
          },
          {
            "active": false,
            "newTask": false,
            "completed": false,
            "failed": true,
            "title": "Setup Jenkins Job",
            "description": "CI job misconfigured and failed to run.",
            "date": "2025-05-28",
            "category": "CI/CD"
          },
          {
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false,
            "title": "Review Feature PR",
            "description": "Review teammate’s pull request.",
            "date": "2025-06-02",
            "category": "Code Review"
          }
        ]
      },
      {
        "id": "E003",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
          {
            "active": false,
            "newTask": true,
            "completed": false,
            "failed": false,
            "title": "Design Logo",
            "description": "Draft logo concepts for new brand.",
            "date": "2025-06-03",
            "category": "Design"
          },
          {
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false,
            "title": "UX Feedback",
            "description": "Gather internal feedback on UI.",
            "date": "2025-05-27",
            "category": "User Research"
          },
          {
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false,
            "title": "Create Wireframes",
            "description": "Build wireframes for settings page.",
            "date": "2025-06-01",
            "category": "Design"
          }
        ]
      },
      {
        "id": "E004",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
          {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "title": "Product Restock",
            "description": "Restock out-of-stock items.",
            "date": "2025-06-02",
            "category": "Inventory"
          },
          {
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false,
            "title": "Vendor Follow-up",
            "description": "Confirm shipment details with vendor.",
            "date": "2025-05-30",
            "category": "Logistics"
          },
          {
            "active": false,
            "newTask": false,
            "completed": false,
            "failed": true,
            "title": "Audit Checklist",
            "description": "Missed internal audit checklist deadline.",
            "date": "2025-05-28",
            "category": "Compliance"
          },
          {
            "active": false,
            "newTask": true,
            "completed": false,
            "failed": false,
            "title": "Equipment Order",
            "description": "Order new laptops and headsets.",
            "date": "2025-06-03",
            "category": "Procurement"
          }
        ]
      },
      {
        "id": "E005",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
          {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "title": "Social Media Campaign",
            "description": "Plan weekly content calendar.",
            "date": "2025-06-01",
            "category": "Marketing"
          },
          {
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false,
            "title": "Publish Blog Post",
            "description": "Post article about product update.",
            "date": "2025-05-29",
            "category": "Content"
          },
          {
            "active": false,
            "newTask": false,
            "completed": false,
            "failed": true,
            "title": "Email Campaign Error",
            "description": "Links in campaign email were broken.",
            "date": "2025-05-27",
            "category": "Marketing"
          },
          {
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false,
            "title": "SEO Audit",
            "description": "Analyze keywords for site ranking.",
            "date": "2025-06-03",
            "category": "SEO"
          }
        ]
      }
    ]
  }
];

const admin = [
  {
    "admin": {
      "id": "A001",
      "email": "admin@example.com",
      "password": "123"
    }
  }
];

export const setLocalStorage =() =>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage =() =>{
    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))
    
    return {employees,admin}
}