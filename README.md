# React Native Crypto Tracker

A modern React Native application for tracking cryptocurrency market data in real-time. Built with TypeScript and powered by the CoinGecko API.

<img width="50%" height="2556" alt="Simulator Screenshot - iPhone 15 - 2025-09-23 at 19 35 16" src="https://github.com/user-attachments/assets/658c38ad-8d94-4569-9b27-2c904609dc98" />

## Features

- 📊 **Real-time Market Data**: View current cryptocurrency prices and 24h changes
- 🔄 **Pull-to-Refresh**: Update data with a simple pull gesture
- 📱 **Responsive Design**: Clean, modern UI optimized for mobile devices
- ⚡ **Fast Performance**: Efficient data fetching with React Query
- 🎯 **Pagination**: Browse through multiple pages of market data
- 💾 **State Management**: Persistent preferences with Zustand

## Screenshots

The app displays a clean list of cryptocurrencies with:

- Coin icons and names
- Current prices in USD
- 24-hour price change percentages (color-coded)
- Market cap rankings

## Tech Stack

- **React Native 0.73.9** - Cross-platform mobile development
- **TypeScript** - Type-safe development
- **React Query (TanStack Query)** - Server state management and caching
- **Zustand** - Lightweight state management
- **Axios** - HTTP client for API requests
- **CoinGecko API** - Cryptocurrency market data

## Prerequisites

- Node.js >= 18
- React Native development environment
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Matthew3dg/react-native-crypto-statistic.git
cd react-native-crypto-statistic
```

2. Install dependencies:

```bash
yarn install
# or
npm install
```

3. For iOS, install CocoaPods dependencies:

```bash
cd ios && pod install && cd ..
```

## Running the App

### iOS

```bash
yarn ios
# or
npm run ios
```

### Android

```bash
yarn android
# or
npm run android
```

### Metro Bundler

```bash
yarn start
# or
npm start
```

## Project Structure

```
src/
├── api/
│   └── coingecko.ts          # CoinGecko API client and types
├── components/
│   └── CoinRow.tsx           # Individual coin display component
├── hooks/
│   └── useMarketsQuery.ts    # React Query hook for market data
├── providers/
│   └── QueryProvider.tsx     # React Query provider setup
├── screens/
│   └── MarketsScreen.tsx     # Main markets listing screen
└── store/
    └── preferences.ts        # Zustand store for app preferences
```

## Key Components

### MarketsScreen

The main screen displaying a paginated list of cryptocurrencies with:

- Pull-to-refresh functionality
- Pagination controls
- Loading states
- Error handling

### CoinRow

Individual coin display component showing:

- Coin icon and name
- Current price
- 24h price change (color-coded)

### API Integration

- Uses CoinGecko's public API
- Implements proper error handling
- Configurable pagination and currency preferences

## Available Scripts

- `yarn start` - Start the Metro bundler
- `yarn ios` - Run on iOS simulator
- `yarn android` - Run on Android emulator
- `yarn test` - Run tests
- `yarn lint` - Run ESLint

## Configuration

The app uses the following default settings:

- Currency: USD
- Items per page: 25
- API timeout: 15 seconds

These can be modified in the preferences store.

## Development

The project follows React Native best practices:

- TypeScript for type safety
- Functional components with hooks
- Proper separation of concerns
- Clean component architecture

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## API Usage

This app uses the CoinGecko API which is free for public use. No API key is required for basic market data.

## Performance

- Efficient data caching with React Query
- Optimized FlatList rendering
- Minimal re-renders with proper state management
- Image caching for coin icons
