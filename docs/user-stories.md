# User Stories

## Overview
This document contains user stories for the CatchUp application, which is a news reader app that allows users to browse news sources, view articles, and engage with ethical and inclusive features. The user stories are structured to capture the needs and goals of the users, as well as the acceptance criteria for each story.

## Requirement Traceability Matrix

| User Story                                        | Bounded Context | Implementation Elements                                                             |
|:--------------------------------------------------|:----------------|:------------------------------------------------------------------------------------|
| US001: Browse News Sources                        | News            | `NewsStore`, `NewsApi`, `SourceAssembler`, `Source`, `SourceList`, `SourceItem`     |
| US002: View Articles                              | News            | `NewsStore`, `NewsApi`, `ArticleAssembler`, `Article`, `ArticleList`, `ArticleItem` |
| US003: Engage with Ethical and Inclusive Features | Shared          | `LanguageSwitcher`, `Footer`, `LogoDevApi`                                          |
| US004: Interact with Articles and Sources         | News            | `ArticleItem`, `SourceSummary`, `Web Share API`, `Clipboard API`, `Url`             |

## User Stories for CatchUp

### US001: Browse News Sources
**As a** User, **I want to** browse available news sources, **so that** I can choose a source to access its articles.
- **Given** the User accesses the CatchUp application, **when** the news sources are retrieved from the provider, **then** the User can access the available news sources, including their names, and the first source is chosen by default.
- **Given** the User is browsing news sources, **when** the User chooses a different source, **then** the chosen source is indicated as active.

### US002: View Articles
**As a** User, **I want to** access articles from a chosen source, **so that** I can read news content.
- **Given** the User accesses the CatchUp application, **when** the news sources are retrieved and the first source is chosen, **then** the User can access articles for the first source, including their titles and summaries.
- **Given** the User chooses a different source, **when** the articles for that source are retrieved, **then** the User can access articles for the chosen source, including their titles and summaries.

### US003: Engage with Ethical and Inclusive Features
**As a** User, **I want to** engage with features that promote inclusivity and transparency, **so that** I can interact with the application in my preferred language and understand its data sources.
- **Given** the User is using the CatchUp application, **when** the User chooses a language (English or Spanish), **then** the User experiences the application in the chosen language.
- **Given** the User accesses the CatchUp application, **when** the User seeks attribution information, **then** the User is presented with attributions for NewsAPI.org and Logo.dev Logo API.

### US004: Interact with Articles and Sources
**As a** User, **I want to** share articles, access their original source, or view detailed source information, **so that** I can distribute news, read full content, or understand the news provider better.
- **Given** the User accesses an article, **when** the User initiates sharing the article, **then** the User can share the article’s title and URL via a sharing mechanism if supported.
- **Given** the User initiates sharing and the sharing mechanism is not supported, **when** the User opts to copy the article’s URL, **then** the article’s URL is copied for sharing.
- **Given** the User completes sharing or copying the article, **when** the action is finalized, **then** the User receives confirmation of the action.
- **Given** the User accesses an article, **when** the User chooses to visit the article’s original source, **then** the User is directed to the article’s original URL.
- **Given** the User accesses an article, **when** the User chooses to view the source information, **then** the User is presented with a summary including the source's logo, name, description, category, language, and country, with an option to visit the source's website.
