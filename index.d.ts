// Type definitions for Angular Translate (pascalprecht.translate module)
// Project: https://github.com/PascalPrecht/angular-translate
// Definitions by: Michel Salib <michelsalib@hotmail.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

import * as angular from 'angular';

declare module angular.translate {
	interface ITranslationTable {
		[key: string]: string;
	}

	interface IStorage {
		get(name: string): string;
		set(name: string, value: string): void;
	}

	interface ISTaticFilesLoaderOptions {
		prefix: string;
		suffix: string;
		key?: string;
	}

	interface ITranslateService {
		(key: string, ...params: string[]): string;
		fallbackLanguage(): string;
		preferredLanguage(): string;
		proposedLanguage(): string;
		refresh(lankKey: string): angular.IPromise<void>;
		storage(): IStorage;
		storageKey(): string;
		use(): string;
		use(key: string): angular.IPromise<string>;
		cloakClassName(): string;
		cloakClassName(name: string): ITranslateProvider;
		useFallbackLanguage(): void;
	}

	interface ITranslateProvider extends  angular.IServiceProvider {
		translations(key: string, translationTable: ITranslationTable): ITranslateProvider;
		addInterpolation(factory: any): ITranslateProvider;
		useMessageFormatInterpolation(): ITranslateProvider;
		useInterpolation(factory: string): ITranslateProvider;
		preferredLanguage(): string;
		preferredLanguage(language: string): ITranslateProvider;
		translationNotFoundIndicator(indicator: string): ITranslateProvider;
		translationNotFoundIndicatorLeft(): string;
		translationNotFoundIndicatorLeft(indicator: string): ITranslateProvider;
		translationNotFoundIndicatorRight(): string;
		translationNotFoundIndicatorRight(indicator: string): ITranslateProvider;
		fallbackLanguage(): string;
		fallbackLanguage(language: string): ITranslateProvider;
		fallbackLanguage(languages: string[]): ITranslateProvider;
		use(): string;
		use(key: string): ITranslateProvider;
		useUrlLoader(url: string): ITranslateProvider;
		useStaticFilesLoader(options: ISTaticFilesLoaderOptions): ITranslateProvider;
		useLoader(loaderFactory: string, options: any): ITranslateProvider;
		useLocalStorage(): ITranslateProvider;
		useCookieStorage(): ITranslateProvider;
		useStorage(storageFactory: any): ITranslateProvider;
		storagePrefix(): string;
		storagePrefix(prefix: string): ITranslateProvider;
		useMissingTranslationHandlerLog(): ITranslateProvider;
		useMissingTranslationHandler(factory: string): ITranslateProvider;
		determinePreferredLanguage(): ITranslateProvider;
		cloakClassName(): string;
		cloakClassName(name: string): ITranslateProvider;
	}
}