---
title: .NET MAUI
author: IronWill79
description: ".NET MAUI framework learning"
pubDate: 2024-12-25
tags: [".NET", "MAUI", "cross-platform", "Microsoft"]
---

.NET MAUI simplifies cross-platform development.

## Notes

This ecosystem is insane. Looking on LinkedInLearning for Xamarin leads me to Visual Studio App Center.
Visual Studio App Center is scheduled for retirement on March 31, 2025.
After finding a course on .NET MAUI Essential Training, released just over 2 years ago, 12/8/2022, for iOS development, it says to install Visual Studio for Mac.
Visual Studio for Mac has been retired as of August 31, 2024.
Suggests to use Visual Studio Code and the [C# Dev Kit](https://code.visualstudio.com/docs/csharp/get-started)
Tutorial says to use .NET 6, currently .NET 8 is LTS and 9 is available. Chose .NET 8.

## Getting Started

### What is .NET MAUI?

- Multi-application user interface
- Creating a cross-platform application using a single project

#### .NET MAUI is the latest in a line of frameworks from Microsoft

- Xamarin
  - Native UI: multiple projects
- Xamarin.Forms
  - Shared UI: multiple projects
- .NET MAUI
  - Shared UI: single project

#### Building for Multiple Platforms

- Single project
- .NET 6 is everywhere
- Easy platform targeting

.NET MAUI uses C# and XAML, and is mobile focused
Blazor uses C# and HTML, and is web focused

#### Application startup and configuration

The `MauiProgram.cs` file launches the application, and this is where configuration can be set.
The `.UseMauiApp<App>()` call launches the `App.xaml` and `App.xaml.cs` files as the application.
This is also where dependency injection is done, adding types to the views.

  - Copy the Chapter1/Assets/Views folder into the Application root.
  - Copy the Chapter1/Assets/{Services,ViewModels} folders into the Library root.

`.AddSingleton` and `.AddTransient` can be used to inject the services, views and view models into the application.

