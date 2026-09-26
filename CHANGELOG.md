# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-09-11

### Added
- Requirement Traceability Matrix (RTM) in `docs/user-stories.md` to map user stories to implementation elements.
- `SourceSummary` component to display detailed news source information (logo, description, category, language, country).
- Interaction in `ArticleItem` to open the `SourceSummary` dialog.
- Author field to `Article` domain entity and `ArticleResource` interface.
- Category, language, and country fields to `Source` domain entity and `SourceResource` interface.
- Documentation for `SourceSummary` in `docs/class-diagram.puml`.

### Changed
- Refactored `SourceAssembler` and `ArticleAssembler` from static classes to `@Injectable` instances using Angular's dependency injection.
- Updated `NewsApi` to use injected assembler instances instead of static methods.
- Modified `Article` and `Source` entities to use `Url` value objects for web and logo links.
- Updated `docs/user-stories.md` to include source information interaction in US004.
- Synchronized `docs/class-diagram.puml` with the current codebase structure and DI patterns.
- Enhanced `ArticleItem` sharing mechanism to support Web Share API with clipboard fallback.
- Improved accessibility and UI layout in `ArticleItem`.

### Fixed
- Missing `SourceSummary` component in the project's class diagram.
- Outdated field definitions in `SourceResource` and `ArticleResource` interfaces.
- Static dependency on `LogoDevApi` in assemblers, now properly injected.

## [0.1.0] - 2026-09-10
### Added
- Initial project setup with the Angular framework.
- Basic domain entities: `Article` and `Source`.
- Basic resource interfaces: `ArticleResource` and `SourceResource`.
- Initial implementation of `NewsApi` service to fetch articles and sources.
- Basic UI components: `ArticleItem` and `SourceSummary`.
- Initial documentation for user stories and class diagrams.
