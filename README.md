# Odin Riverpod

## Overview

Odin Riverpod is a Visual Studio Code extension that provides shortcuts for creating Riverpod `ConsumerStatefulWidget` pages in Dart. This extension streamlines your development process by allowing you to quickly scaffold out the necessary code structure.

## Features

- Shortcuts for creating `ConsumerStatefulWidget` in Dart.
- Easy integration into your existing Dart projects.
- Lightweight and efficient.

## Installation

1. Open Visual Studio Code.
2. Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window or by pressing `Ctrl+Shift+X`.
3. Search for "Odin Riverpod" and click **Install**.

## Usage

Once installed, you can create a new `ConsumerStatefulWidget` by typing the shortcut in your Dart files:

1. Open a Dart file.
2. Type `newbase` and press `Tab` (or the equivalent key for your snippet expansion).
3. This will generate the following code structure:

```dart
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../../components/base_full_widget.dart';

class MyHome extends BaseStatefulWidget {
  const MyHome({super.key});

  @override
  ConsumerState<BaseStatefulWidget> createState() => _MyHomeState();
}

class _MyHomeState extends ConsumerState<MyHome> {
  @override
  Widget build(BuildContext context) {
    return Container();
  }
}
