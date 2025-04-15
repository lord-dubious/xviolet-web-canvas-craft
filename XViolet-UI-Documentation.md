
# XViolet Web GUI – Implementation Documentation

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
  - `Layout.tsx` - Main layout wrapper
  - `Header.tsx` - Top navigation bar
  - `Sidebar.tsx` - Left navigation sidebar
  - `Footer` - Site footer (part of Layout)

- **UI Components**
  - Shadcn UI components (buttons, cards, etc.)
  - Custom XViolet-specific components

## Navigation Flow

1. **Login Flow**:
   - User enters credentials at `/login`
   - On successful authentication, redirected to Dashboard (`/`)

2. **Main Navigation**:
   - Persistent sidebar on desktop
   - Mobile: Collapsible sidebar via hamburger menu
   - All main sections accessible from sidebar

3. **User Menu**:
   - Profile dropdown in header
   - Access to Profile, Settings, Logout

## Design System

### Theme

XViolet uses a custom color system with light and dark mode support:

- **Primary Color**: `#6c2eb7` (violet/purple)
- **Dark Mode**: Automatically adjusts for dark environments
- **CSS Variables**: Defined in `tailwind.config.js` for consistent theming

### Component Patterns

1. **Cards**:
   - Rounded corners, subtle shadows
   - Consistent padding and spacing
   - `xv-card` utility class

2. **Forms**:
   - Labeled inputs
   - Consistent validation patterns
   - Responsive layouts

3. **Navigation Elements**:
   - Active state indicators
   - Hover effects
   - Mobile-friendly touch targets

## Extensions System

The Extensions page provides a dynamic interface for third-party plugins:

- **Tab Navigation**: One tab per extension
- **Dynamic Forms**: Each extension defines its own fields and actions
- **Status Feedback**: Success/error messaging
- **Logs**: Collapsible log viewer for technical output

Extensions are currently mocked with sample data but designed to be populated dynamically from API endpoints.

## Responsive Design

- **Desktop**: Full sidebar, expanded layout
- **Tablet**: Adapted spacing, may show/hide certain elements
- **Mobile**: 
  - Collapsible sidebar via hamburger menu
  - Stacked layouts
  - Touch-optimized controls

## Dark Mode

Dark mode is fully supported throughout the application:

- Toggle in the header
- System preference detection
- Persistent user preference

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
