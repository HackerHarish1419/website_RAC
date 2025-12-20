# Admin Panel Visual Guide

## Login Screen

```
┌─────────────────────────────────────┐
│                                     │
│      Admin Dashboard Login          │
│                                     │
│  Admin Password                     │
│  ┌─────────────────────────────┐   │
│  │ ••••••••••••••              │   │
│  └─────────────────────────────┘   │
│                                     │
│         [ Login Button ]            │
│                                     │
└─────────────────────────────────────┘

Default Password: admin123
```

## Main Dashboard

```
┌──────────────────────────────────────────────────────┐
│  Admin Dashboard              [ Logout ]             │
├──────────────────────────────────────────────────────┤
│                                                      │
│  [ + Add New Project ]                              │
│                                                      │
│  Projects (3)                                        │
│                                                      │
│  ┌──────────────────┐  ┌──────────────────┐         │
│  │ [Image Preview]  │  │ [Image Preview]  │         │
│  │                  │  │                  │         │
│  │ Project Title    │  │ Project Title    │         │
│  │ Education ⭐     │  │ Healthcare       │         │
│  │ Description...   │  │ Description...   │         │
│  │ [Edit] [Delete]  │  │ [Edit] [Delete]  │         │
│  └──────────────────┘  └──────────────────┘         │
│                                                      │
│  ┌──────────────────┐                               │
│  │ [Image Preview]  │                               │
│  │                  │                               │
│  │ Project Title    │                               │
│  │ Community        │                               │
│  │ Description...   │                               │
│  │ [Edit] [Delete]  │                               │
│  └──────────────────┘                               │
│                                                      │
└──────────────────────────────────────────────────────┘
```

## Add/Edit Project Form

```
┌──────────────────────────────────────────────────────┐
│  Add New Project                                     │
├──────────────────────────────────────────────────────┤
│                                                      │
│  Project Title *                                     │
│  ┌──────────────────────────────────────────────┐   │
│  │ Enter project title                          │   │
│  └──────────────────────────────────────────────┘   │
│                                                      │
│  Project Avenue *                                    │
│  ┌──────────────────────────────────────────────┐   │
│  │ ▼ Education                                  │   │
│  │   - Healthcare                               │   │
│  │   - Community Development                    │   │
│  │   - Environment                              │   │
│  │   - Technology                               │   │
│  │   - Other                                    │   │
│  └──────────────────────────────────────────────┘   │
│                                                      │
│  ☐ Mark as Signature Project                        │
│                                                      │
│  Description *                                       │
│  ┌──────────────────────────────────────────────┐   │
│  │ Enter project description...                 │   │
│  │                                              │   │
│  │                                              │   │
│  └──────────────────────────────────────────────┘   │
│                                                      │
│  Project Image *                                     │
│  ┌──────────────────────────────────────────────┐   │
│  │ Choose File: [Browse...]                     │   │
│  └──────────────────────────────────────────────┘   │
│                                                      │
│  ┌──────────────────────────────────────────────┐   │
│  │ [Image Preview]                              │   │
│  │ Image Preview                                │   │
│  │                                              │   │
│  └──────────────────────────────────────────────┘   │
│                                                      │
│  Status                                              │
│  ┌──────────────────────────────────────────────┐   │
│  │ ▼ Active                                     │   │
│  │   - Inactive                                 │   │
│  └──────────────────────────────────────────────┘   │
│                                                      │
│  [ Add Project ]  [ Cancel ]                         │
│                                                      │
└──────────────────────────────────────────────────────┘
```

## Project Card Details

```
┌─────────────────────────────────────┐
│                                     │
│   [        Image Preview        ]   │
│   [                             ]   │
│   [                             ]   │
│                                     │
│  Project Title                      │
│  Education  ⭐ Signature            │
│                                     │
│  This is the project description    │
│  that provides details about the    │
│  project...                         │
│                                     │
│  [ Edit ]  [ Delete ]               │
│                                     │
└─────────────────────────────────────┘

Color Coding:
- Purple Badge: Project Avenue
- Yellow Badge: Signature Project (⭐)
- Blue Button: Edit
- Red Button: Delete
```

## Badge Examples

```
Avenues:
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│ Education        │  │ Healthcare       │  │ Community        │
└──────────────────┘  └──────────────────┘  └──────────────────┘

┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│ Environment      │  │ Technology       │  │ Other            │
└──────────────────┘  └──────────────────┘  └──────────────────┘

Signature:
┌──────────────────┐
│ ⭐ Signature     │
└──────────────────┘
```

## Workflow Examples

### Example 1: Adding an Education Project

```
1. Click "Add New Project"
   ↓
2. Fill Form:
   - Title: "Digital Literacy Program"
   - Avenue: Select "Education"
   - Check "Mark as Signature Project"
   - Description: "Teaching digital skills to rural communities"
   - Image: Upload photo.jpg
   - Status: Active
   ↓
3. Click "Add Project"
   ↓
4. Success! Project appears in list with:
   - Image preview
   - "Education" badge (purple)
   - "⭐ Signature" badge (yellow)
```

### Example 2: Editing a Project

```
1. Find project in list
   ↓
2. Click "Edit" button
   ↓
3. Form opens with current data
   ↓
4. Modify fields (e.g., change description)
   ↓
5. Optionally upload new image
   ↓
6. Click "Update Project"
   ↓
7. Success! Changes saved
```

### Example 3: Deleting a Project

```
1. Find project in list
   ↓
2. Click "Delete" button
   ↓
3. Confirmation dialog appears
   ↓
4. Click "OK" to confirm
   ↓
5. Project removed
   ↓
6. Associated image deleted from uploads/
```

## Form Validation

```
Required Fields (marked with *):
✓ Project Title - Cannot be empty
✓ Project Avenue - Must select one
✓ Description - Cannot be empty
✓ Project Image - Must upload file

File Validation:
✓ Supported: PNG, JPG, JPEG, GIF, WebP
✗ Not supported: BMP, TIFF, SVG, etc.
✓ Max size: 16MB
✗ Larger files: Rejected

Avenue Options:
- Education
- Healthcare
- Community Development
- Environment
- Technology
- Other
```

## Notifications

### Success Message
```
┌────────────────────────────────────┐
│ ✓ Project added successfully       │
└────────────────────────────────────┘
(Appears for 3 seconds, top-right)
```

### Error Message
```
┌────────────────────────────────────┐
│ ✗ Failed to add project            │
└────────────────────────────────────┘
(Appears for 3 seconds, top-right)
```

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Submit Form | Enter (when focused) |
| Cancel Form | Esc |
| Logout | (Button only) |

## Responsive Design

### Desktop (1024px+)
- 3 columns of project cards
- Full-width form
- Sidebar optional

### Tablet (768px - 1023px)
- 2 columns of project cards
- Full-width form
- Optimized spacing

### Mobile (< 768px)
- 1 column of project cards
- Full-width form
- Touch-friendly buttons
- Larger input fields

## Dark Mode (Optional Future Enhancement)

```
Currently: Light mode only
Future: Add toggle for dark mode
- Dark background
- Light text
- Adjusted colors for readability
```

## Performance Tips

1. **Image Optimization**
   - Resize images before uploading
   - Use JPEG for photos
   - Use PNG for graphics
   - Keep under 5MB for best performance

2. **Project Management**
   - Archive old projects instead of deleting
   - Use descriptive titles
   - Keep descriptions concise

3. **Browser**
   - Use modern browser (Chrome, Firefox, Safari, Edge)
   - Clear cache if issues occur
   - Disable extensions if problems

## Accessibility Features

- ✓ Keyboard navigation
- ✓ Color-coded badges
- ✓ Clear labels
- ✓ Error messages
- ✓ Success feedback
- ✓ Responsive design
- ✓ High contrast text

## Common Patterns

### Adding Multiple Projects
```
1. Click "Add New Project"
2. Fill and submit
3. Success message appears
4. Form resets
5. New project in list
6. Repeat for next project
```

### Bulk Editing
```
1. Edit Project A
2. Click "Update"
3. Edit Project B
4. Click "Update"
5. Continue as needed
```

### Organizing by Avenue
```
All projects visible in one list
Filter by avenue (future enhancement):
- Show only Education
- Show only Healthcare
- Show only Signature projects
```

---

**Ready to use!** Start managing your projects now.
