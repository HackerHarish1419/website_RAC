# Project Avenues Reference

## Official RACREC Service Avenues

Based on the ImpactPage.tsx, the official project avenues for RACREC are:

### 1. **Club Service**
- **Code**: `club`
- **Description**: Club activities, bonding events, and internal club initiatives
- **Examples**: Actopia, Memomania, Brunch'N'Bowl
- **Badge Color**: Purple

### 2. **Community Service**
- **Code**: `community`
- **Description**: Community outreach programs and social initiatives
- **Examples**: Udhiram (Blood Donation), Guru Prashansa (Teachers' Day), Silent Streets (Road Safety)
- **Badge Color**: Purple

### 3. **International Service**
- **Code**: `international`
- **Description**: Global partnerships, international collaborations, and cross-border initiatives
- **Examples**: Letterhead Exchange, Red Ribbon Reach, The Twin Pact
- **Badge Color**: Purple

### 4. **Professional Service**
- **Code**: `professional`
- **Description**: Professional development, skill-building, and career-oriented programs
- **Examples**: Prompt IQ, Victo-Ryla, Figma Flow
- **Badge Color**: Purple

---

## Using in Admin Panel

When adding or editing projects in the admin panel, select from these avenues:

```
Project Avenue Dropdown:
├── Club Service
├── Community Service
├── International Service
└── Professional Service
```

---

## Data Storage

Each project stores the avenue as a lowercase string:

```json
{
  "avenue": "community"  // or "club", "international", "professional"
}
```

---

## Filtering & Display

### In ImpactPage
Projects are filtered by category:
```javascript
activeFilter === 'all' 
  ? projects 
  : projects.filter(project => project.category === activeFilter)
```

### In Admin Panel
Projects display with avenue badge:
```
Purple Badge: [Avenue Name]
```

---

## Adding New Projects

### Example: Community Service Project

```
Title: Udhiram
Avenue: Community Service (select from dropdown)
Description: A successful blood donation camp uniting students for a life-saving cause.
Image: Upload from computer
Signature: ✓ (if it's a flagship project)
Status: Active
```

### Example: Professional Service Project

```
Title: Prompt IQ
Avenue: Professional Service (select from dropdown)
Description: Unleashing creativity through the art and science of prompt engineering.
Image: Upload from computer
Signature: ✓ (if it's a flagship project)
Status: Active
```

---

## Mapping Reference

| Display Name | Code | Type |
|--------------|------|------|
| Club Service | `club` | Service Avenue |
| Community Service | `community` | Service Avenue |
| International Service | `international` | Service Avenue |
| Professional Service | `professional` | Service Avenue |

---

## Important Notes

1. **Always use lowercase** avenue codes in the database
2. **Display names** are shown in the UI with proper capitalization
3. **Avenues are fixed** - these 4 are the official RACREC service avenues
4. **Signature projects** can be from any avenue
5. **Status** (Active/Inactive) is separate from avenue

---

## Related Files

- **Admin Panel**: `src/pages/AdminPage.tsx` (lines 334-337)
- **Impact Page**: `src/pages/ImpactPage.tsx` (project data)
- **Backend**: `backend/app.py` (stores avenue in projects.json)

---

**Last Updated**: January 2025  
**Status**: ✅ Aligned with ImpactPage.tsx
