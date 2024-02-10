## Introduction

The Word Data app is a lightweight React application designed to provide users with real-time feedback on the length of their input in a textarea element.

It helps users stay within the character limits of platforms like Twitter and Facebook and alerts them if they attempt to include a potentially harmful `<script>` tag.

## Table of Contents

- [Introduction](#introduction)
- [Table of Contents](#table-of-contents)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)

## Features

- Tracks character count in real-time.
- Calculates word count based on spaces.
- Alerts users if a `<script>` tag is detected in the input.
- Provides visual feedback on character limits for Twitter and Facebook.

## Installation

This template use the React template from Vite.

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh

1. cd into root directory
2. npm install
3. npm run dev
4. App runs on local host port 5173

## Usage

1. Enter text into the textarea element.
2. View real-time character and word count statistics.
3. Receive alerts if a `<script>` tag is detected in the input.
4. Enjoy hassle-free character counting!
