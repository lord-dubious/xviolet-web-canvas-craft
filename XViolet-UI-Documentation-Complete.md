
# XViolet Web GUI – Complete Implementation Documentation

## Overview

XViolet is a responsive web interface built with React, TypeScript, and Tailwind CSS, following the design specifications provided. This documentation outlines the structure, navigation, components, and theming of the application.

## Site Structure

### Pages and Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/login` | `Login` | Authentication page with username/password form |
| `/` | `Dashboard` | Main dashboard with account info and activity |
| `/timeline` | `Timeline` | View and interact with tweet timeline |
| `/tweet` | `Tweet` | Compose and post new tweets |
| `/extensions` | `Extensions` | Manage and use Twitter extensions |
| `/settings` | `Settings` | User profile and account settings |
| `/agent-central` | `AgentCentral` | Agent collaboration tools |
| `*` | `NotFound` | 404 page for unknown routes |

### Component Structure

- **Layout Components**
  - `Layout.tsx` - Main layout wrapper with header, sidebar, and footer
  - `Header.tsx` - Top navigation bar with logo, user profile, and notifications
  - `Sidebar.tsx` - Left navigation sidebar with main application routes
  - `Footer` - Site footer with version and copyright info (part of Layout)

- **UI Components**
  - Shadcn UI components for consistent and accessible UI elements
  - Custom XViolet-specific components and styling

## Navigation Flow

1. **Login Flow**:
   - User enters credentials at `/login`
   - On successful authentication, redirected to Dashboard (`/`)

2. **Main Navigation**:
   - Persistent sidebar on desktop with six main sections
   - Mobile: Collapsible sidebar via hamburger menu button
   - All main sections accessible from any page

3. **User Menu**:
   - Profile dropdown in header
   - Access to Profile, Settings, Logout

## Design System

### Theme

XViolet uses a custom color system with light and dark mode support:

- **Primary Color**: `#6c2eb7` (violet/purple)
- **Secondary Colors**: Various shades of purple
- **Dark Mode**: Automatically adjusts for dark environments
- **CSS Variables**: Defined for consistent theming

### Layout Specifications

1. **Header**:
   - Height: 64px (desktop), 48px (mobile)
   - Logo, app name, user avatar, notifications

2. **Sidebar**:
   - Width: 220px
   - Background: #f5f3fa (light), custom dark theme
   - Active tab highlighting

3. **Main Content Area**:
   - Padding: 32px (desktop), 8px (mobile)
   - Max width: 1200px, centered

4. **Footer**:
   - Height: 40px
   - Version info and copyright

### Component Patterns

1. **Cards**:
   - Rounded corners (8px), subtle shadows
   - Consistent padding and spacing

2. **Forms**:
   - Labeled inputs
   - Consistent validation patterns
   - Responsive layouts

3. **Navigation Elements**:
   - Active state indicators
   - Hover effects
   - Mobile-friendly touch targets

## Page-by-Page Implementation

### Login Page
- Centered card with login form
- Username and password fields
- TOTP/2FA support (when required)
- Error handling and feedback

### Dashboard
- Overview panels showing account info and stats
- Recent activity feed
- Quick access shortcuts
- Responsive grid layout

### Timeline
- Tab navigation between Home, User, Mentions, Search
- Search functionality with filters
- Tweet display with media support
- Tweet actions (like, retweet, reply)
- Sidebar with trending topics and follow suggestions

### Tweet Composer
- Rich text editor for tweet content
- Media upload support
- Thread creation functionality
- Scheduling options
- Preview and feedback

### Extensions Panel
- Dynamic tabs for each extension
- Form-based interface for each extension
- Status feedback and logs
- Extension management

### Settings Panel
- Profile management (username, password, bio)
- Account security (2FA, sessions)
- Preferences (theme, notifications)
- Responsive form layout

### Agent Central
- Status display
- Markdown editor
- Task management
- Messaging system

## Extensions System

The Extensions page provides a dynamic interface for third-party plugins:

- **Tab Navigation**: One tab per extension
- **Dynamic Forms**: Each extension defines its own fields and actions
- **Status Feedback**: Success/error messaging
- **Logs**: Collapsible log viewer for technical output

Extensions are implemented to support various types of inputs:
- Text fields
- Dropdowns
- Checkboxes/Toggles
- File uploads
- Text areas
- Date/time pickers

## Responsive Design

- **Desktop**: Full sidebar, expanded layout
- **Tablet**: Adapted spacing, side-by-side layout
- **Mobile**: 
  - Collapsible sidebar via hamburger menu
  - Stacked layouts
  - Touch-optimized controls

## Dark Mode

Dark mode is fully supported throughout the application:

- Toggle in the header
- System preference detection
- Persistent user preference
- Custom CSS variables for dark theme

## Accessibility Features

- Proper ARIA attributes throughout the interface
- Keyboard navigation support
- Screen reader friendly
- Sufficient color contrast
- Focus indicators

## API Integration Points

The UI is built to integrate with these API endpoints:

- `/api/auth` - Authentication services
- `/api/timeline` - Tweet timeline data
- `/api/tweet` - Tweet creation/management
- `/api/user` - User profile data
- `/api/extensions` - Extensions management

## Future Enhancements

1. **Real-time Updates**: WebSocket integration for timeline and notifications
2. **Extension Marketplace**: Browse and install extensions
3. **Advanced Analytics**: Enhanced data visualization
4. **Multi-account Support**: Manage multiple Twitter profiles
5. **Plugin System**: Allow 3rd party developers to create and distribute extensions

## Development Guidelines

1. **Component Creation**: Each logical UI element should be its own component
2. **CSS Approach**: Use Tailwind utility classes with custom CSS when needed
3. **State Management**: React hooks for local state, context for shared state
4. **Accessibility**: Ensure ARIA compliance and keyboard navigation

## Project Structure Map

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   └── Layout.tsx
│   ├── ui/ (shadcn components)
│   └── [feature-specific components]
├── hooks/
│   └── use-mobile.tsx
├── pages/
│   ├── Login.tsx
│   ├── Dashboard.tsx
│   ├── Timeline.tsx
│   ├── Tweet.tsx
│   ├── Extensions.tsx
│   ├── Settings.tsx
│   ├── AgentCentral.tsx
│   └── NotFound.tsx
├── lib/
│   └── utils.ts
├── providers/
│   └── ThemeProvider.tsx
└── App.tsx
```

## Implementation Notes

- **UI Framework**: React + Tailwind CSS + shadcn/ui
- **Routing**: React Router
- **Form Handling**: React Hook Form
- **Icons**: Lucide React
- **Theming**: CSS variables + Tailwind
- **Data Fetching**: Tanstack Query (React Query)

## Navigation Map

```
+----------------+
|    Login       |
+----------------+
        |
        v
+----------------+
|   Dashboard    |<-----------------------------+
+----------------+                              |
 |   |   |   |   |                              |
 v   v   v   v   v                              |
Timeline  Tweet  Extensions  Settings  AgentCentral
 |       |       |           |         |          |
 +-------+-------+-----------+---------+----------+
         |                                         
     (Sidebar/TopNav: persistent, accessible everywhere)
```

This navigation system ensures that the application is intuitive to use with every page just one click away from any other page.
