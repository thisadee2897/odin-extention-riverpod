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
2. Type `bstf` and press `Tab` (or the equivalent key for your snippet expansion).
3. This will generate the following code structure:

```dart
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../../components/base_full_widget.dart';

class ${screenName}Screen extends BaseStatefulWidget {
  const ${screenName}Screen({super.key});

  @override
  ConsumerState<BaseStatefulWidget> createState() => _${screenName}ScreenState();
}

class _${screenName}ScreenState extends ConsumerState<${screenName}Screen> {
@override
initsate() {
    super.initState();
}


    @override
  Widget buildDesktop(BuildContext context, SizingInformation sizingInformation) {
    return content(
      buildDesktop: true,
    );
  }

  @override
  Widget? buildTablet(BuildContext context, SizingInformation sizingInformation) {
    return content();
  }

  @override
  Widget buildMobile(BuildContext context, SizingInformation sizingInformation) {
    return content();
  }

  Widget content({bool buildDesktop = false}) {
    return Container(
      child: Center(
        child: Text(),
      ),
    );
  }
}`;
