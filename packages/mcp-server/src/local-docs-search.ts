// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
  perLanguage?: Record<string, PerLanguageData>;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'retrieve',
    endpoint: '/brand/retrieve',
    httpMethod: 'get',
    summary: 'Retrieve brand data by domain',
    description: 'Retrieve logos, backdrops, colors, industry, description, and more from any domain',
    stainlessPath: '(resource) brand > (method) retrieve',
    qualified: 'client.brand.retrieve',
    params: [
      'domain: string;',
      'force_language?: string;',
      'maxAgeMs?: number;',
      'maxSpeed?: boolean;',
      'timeoutMS?: number;',
    ],
    response:
      "{ brand?: { address?: { city?: string; country?: string; country_code?: string; postal_code?: string; state_code?: string; state_province?: string; street?: string; }; backdrops?: { colors?: object[]; resolution?: object; url?: string; }[]; colors?: { hex?: string; name?: string; }[]; description?: string; domain?: string; email?: string; industries?: { eic?: object[]; }; is_nsfw?: boolean; links?: { blog?: string; careers?: string; contact?: string; pricing?: string; privacy?: string; terms?: string; }; logos?: { colors?: object[]; mode?: 'light' | 'dark' | 'has_opaque_background'; resolution?: object; type?: 'icon' | 'logo'; url?: string; }[]; phone?: string; primary_language?: string; slogan?: string; socials?: { type?: string; url?: string; }[]; stock?: { exchange?: string; ticker?: string; }; title?: string; }; code?: number; status?: string; }",
    markdown:
      "## retrieve\n\n`client.brand.retrieve(domain: string, force_language?: string, maxAgeMs?: number, maxSpeed?: boolean, timeoutMS?: number): { brand?: object; code?: number; status?: string; }`\n\n**get** `/brand/retrieve`\n\nRetrieve logos, backdrops, colors, industry, description, and more from any domain\n\n### Parameters\n\n- `domain: string`\n  Domain name to retrieve brand data for (e.g., 'example.com', 'google.com'). Cannot be used with name or ticker parameters.\n\n- `force_language?: string`\n  Optional parameter to force the language of the retrieved brand data.\n\n- `maxAgeMs?: number`\n  Maximum age in milliseconds for cached brand data before the API performs a hard refresh. Defaults to 3 months (7776000000 ms). Values below 1 day (86400000 ms) are clamped to 1 day; values above 1 year (31536000000 ms) are clamped to 1 year.\n\n- `maxSpeed?: boolean`\n  Optional parameter to optimize the API call for maximum speed. When set to true, the API will skip time-consuming operations for faster response at the cost of less comprehensive data. Works with all three lookup methods.\n\n- `timeoutMS?: number`\n  Optional timeout in milliseconds for the request. If the request takes longer than this value, it will be aborted with a 408 status code. Maximum allowed value is 300000ms (5 minutes).\n\n### Returns\n\n- `{ brand?: { address?: { city?: string; country?: string; country_code?: string; postal_code?: string; state_code?: string; state_province?: string; street?: string; }; backdrops?: { colors?: object[]; resolution?: object; url?: string; }[]; colors?: { hex?: string; name?: string; }[]; description?: string; domain?: string; email?: string; industries?: { eic?: object[]; }; is_nsfw?: boolean; links?: { blog?: string; careers?: string; contact?: string; pricing?: string; privacy?: string; terms?: string; }; logos?: { colors?: object[]; mode?: 'light' | 'dark' | 'has_opaque_background'; resolution?: object; type?: 'icon' | 'logo'; url?: string; }[]; phone?: string; primary_language?: string; slogan?: string; socials?: { type?: string; url?: string; }[]; stock?: { exchange?: string; ticker?: string; }; title?: string; }; code?: number; status?: string; }`\n\n  - `brand?: { address?: { city?: string; country?: string; country_code?: string; postal_code?: string; state_code?: string; state_province?: string; street?: string; }; backdrops?: { colors?: { hex?: string; name?: string; }[]; resolution?: { aspect_ratio?: number; height?: number; width?: number; }; url?: string; }[]; colors?: { hex?: string; name?: string; }[]; description?: string; domain?: string; email?: string; industries?: { eic?: { industry: string; subindustry: string; }[]; }; is_nsfw?: boolean; links?: { blog?: string; careers?: string; contact?: string; pricing?: string; privacy?: string; terms?: string; }; logos?: { colors?: { hex?: string; name?: string; }[]; mode?: 'light' | 'dark' | 'has_opaque_background'; resolution?: { aspect_ratio?: number; height?: number; width?: number; }; type?: 'icon' | 'logo'; url?: string; }[]; phone?: string; primary_language?: string; slogan?: string; socials?: { type?: string; url?: string; }[]; stock?: { exchange?: string; ticker?: string; }; title?: string; }`\n  - `code?: number`\n  - `status?: string`\n\n### Example\n\n```typescript\nimport BrandDev from 'brand.dev';\n\nconst client = new BrandDev();\n\nconst brand = await client.brand.retrieve({ domain: 'domain' });\n\nconsole.log(brand);\n```",
    perLanguage: {
      typescript: {
        method: 'client.brand.retrieve',
        example:
          "import BrandDev from 'brand.dev';\n\nconst client = new BrandDev({\n  apiKey: process.env['BRAND_DEV_API_KEY'], // This is the default and can be omitted\n});\n\nconst brand = await client.brand.retrieve({ domain: 'domain' });\n\nconsole.log(brand.brand);",
      },
      python: {
        method: 'brand.retrieve',
        example:
          'import os\nfrom brand.dev import BrandDev\n\nclient = BrandDev(\n    api_key=os.environ.get("BRAND_DEV_API_KEY"),  # This is the default and can be omitted\n)\nbrand = client.brand.retrieve(\n    domain="domain",\n)\nprint(brand.brand)',
      },
      java: {
        method: 'brand().retrieve',
        example:
          'package com.branddev.api.example;\n\nimport com.branddev.api.client.BrandDevClient;\nimport com.branddev.api.client.okhttp.BrandDevOkHttpClient;\nimport com.branddev.api.models.brand.BrandRetrieveParams;\nimport com.branddev.api.models.brand.BrandRetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BrandDevClient client = BrandDevOkHttpClient.fromEnv();\n\n        BrandRetrieveParams params = BrandRetrieveParams.builder()\n            .domain("domain")\n            .build();\n        BrandRetrieveResponse brand = client.brand().retrieve(params);\n    }\n}',
      },
      ruby: {
        method: 'brand.retrieve',
        example:
          'require "brand_dev"\n\nbrand_dev = BrandDev::Client.new(api_key: "My API Key")\n\nbrand = brand_dev.brand.retrieve(domain: "domain")\n\nputs(brand)',
      },
      http: {
        example:
          'curl https://api.brand.dev/v1/brand/retrieve \\\n    -H "Authorization: Bearer $BRAND_DEV_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve_by_ticker',
    endpoint: '/brand/retrieve-by-ticker',
    httpMethod: 'get',
    summary: 'Retrieve brand data by stock ticker',
    description: 'Retrieve brand information using a stock ticker symbol.',
    stainlessPath: '(resource) brand > (method) retrieve_by_ticker',
    qualified: 'client.brand.retrieveByTicker',
    params: [
      'ticker: string;',
      'force_language?: string;',
      'maxAgeMs?: number;',
      'maxSpeed?: boolean;',
      'ticker_exchange?: string;',
      'timeoutMS?: number;',
    ],
    response:
      "{ brand?: { address?: { city?: string; country?: string; country_code?: string; postal_code?: string; state_code?: string; state_province?: string; street?: string; }; backdrops?: { colors?: object[]; resolution?: object; url?: string; }[]; colors?: { hex?: string; name?: string; }[]; description?: string; domain?: string; email?: string; industries?: { eic?: object[]; }; is_nsfw?: boolean; links?: { blog?: string; careers?: string; contact?: string; pricing?: string; privacy?: string; terms?: string; }; logos?: { colors?: object[]; mode?: 'light' | 'dark' | 'has_opaque_background'; resolution?: object; type?: 'icon' | 'logo'; url?: string; }[]; phone?: string; primary_language?: string; slogan?: string; socials?: { type?: string; url?: string; }[]; stock?: { exchange?: string; ticker?: string; }; title?: string; }; code?: number; status?: string; }",
    markdown:
      "## retrieve_by_ticker\n\n`client.brand.retrieveByTicker(ticker: string, force_language?: string, maxAgeMs?: number, maxSpeed?: boolean, ticker_exchange?: string, timeoutMS?: number): { brand?: object; code?: number; status?: string; }`\n\n**get** `/brand/retrieve-by-ticker`\n\nRetrieve brand information using a stock ticker symbol.\n\n### Parameters\n\n- `ticker: string`\n  Stock ticker symbol to retrieve brand data for (e.g., 'AAPL', 'GOOGL', 'BRK.A'). Must be 1-15 characters, letters/numbers/dots only.\n\n- `force_language?: string`\n  Optional parameter to force the language of the retrieved brand data.\n\n- `maxAgeMs?: number`\n  Maximum age in milliseconds for cached brand data before the API performs a hard refresh. Defaults to 3 months (7776000000 ms). Values below 1 day (86400000 ms) are clamped to 1 day; values above 1 year (31536000000 ms) are clamped to 1 year.\n\n- `maxSpeed?: boolean`\n  Optional parameter to optimize the API call for maximum speed. When set to true, the API will skip time-consuming operations for faster response at the cost of less comprehensive data.\n\n- `ticker_exchange?: string`\n  Optional stock exchange for the ticker. Defaults to NASDAQ if not specified.\n\n- `timeoutMS?: number`\n  Optional timeout in milliseconds for the request. If the request takes longer than this value, it will be aborted with a 408 status code. Maximum allowed value is 300000ms (5 minutes).\n\n### Returns\n\n- `{ brand?: { address?: { city?: string; country?: string; country_code?: string; postal_code?: string; state_code?: string; state_province?: string; street?: string; }; backdrops?: { colors?: object[]; resolution?: object; url?: string; }[]; colors?: { hex?: string; name?: string; }[]; description?: string; domain?: string; email?: string; industries?: { eic?: object[]; }; is_nsfw?: boolean; links?: { blog?: string; careers?: string; contact?: string; pricing?: string; privacy?: string; terms?: string; }; logos?: { colors?: object[]; mode?: 'light' | 'dark' | 'has_opaque_background'; resolution?: object; type?: 'icon' | 'logo'; url?: string; }[]; phone?: string; primary_language?: string; slogan?: string; socials?: { type?: string; url?: string; }[]; stock?: { exchange?: string; ticker?: string; }; title?: string; }; code?: number; status?: string; }`\n\n  - `brand?: { address?: { city?: string; country?: string; country_code?: string; postal_code?: string; state_code?: string; state_province?: string; street?: string; }; backdrops?: { colors?: { hex?: string; name?: string; }[]; resolution?: { aspect_ratio?: number; height?: number; width?: number; }; url?: string; }[]; colors?: { hex?: string; name?: string; }[]; description?: string; domain?: string; email?: string; industries?: { eic?: { industry: string; subindustry: string; }[]; }; is_nsfw?: boolean; links?: { blog?: string; careers?: string; contact?: string; pricing?: string; privacy?: string; terms?: string; }; logos?: { colors?: { hex?: string; name?: string; }[]; mode?: 'light' | 'dark' | 'has_opaque_background'; resolution?: { aspect_ratio?: number; height?: number; width?: number; }; type?: 'icon' | 'logo'; url?: string; }[]; phone?: string; primary_language?: string; slogan?: string; socials?: { type?: string; url?: string; }[]; stock?: { exchange?: string; ticker?: string; }; title?: string; }`\n  - `code?: number`\n  - `status?: string`\n\n### Example\n\n```typescript\nimport BrandDev from 'brand.dev';\n\nconst client = new BrandDev();\n\nconst response = await client.brand.retrieveByTicker({ ticker: 'ticker' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.brand.retrieveByTicker',
        example:
          "import BrandDev from 'brand.dev';\n\nconst client = new BrandDev({\n  apiKey: process.env['BRAND_DEV_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.brand.retrieveByTicker({ ticker: 'ticker' });\n\nconsole.log(response.brand);",
      },
      python: {
        method: 'brand.retrieve_by_ticker',
        example:
          'import os\nfrom brand.dev import BrandDev\n\nclient = BrandDev(\n    api_key=os.environ.get("BRAND_DEV_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.brand.retrieve_by_ticker(\n    ticker="ticker",\n)\nprint(response.brand)',
      },
      java: {
        method: 'brand().retrieveByTicker',
        example:
          'package com.branddev.api.example;\n\nimport com.branddev.api.client.BrandDevClient;\nimport com.branddev.api.client.okhttp.BrandDevOkHttpClient;\nimport com.branddev.api.models.brand.BrandRetrieveByTickerParams;\nimport com.branddev.api.models.brand.BrandRetrieveByTickerResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BrandDevClient client = BrandDevOkHttpClient.fromEnv();\n\n        BrandRetrieveByTickerParams params = BrandRetrieveByTickerParams.builder()\n            .ticker("ticker")\n            .build();\n        BrandRetrieveByTickerResponse response = client.brand().retrieveByTicker(params);\n    }\n}',
      },
      ruby: {
        method: 'brand.retrieve_by_ticker',
        example:
          'require "brand_dev"\n\nbrand_dev = BrandDev::Client.new(api_key: "My API Key")\n\nresponse = brand_dev.brand.retrieve_by_ticker(ticker: "ticker")\n\nputs(response)',
      },
      http: {
        example:
          'curl https://api.brand.dev/v1/brand/retrieve-by-ticker \\\n    -H "Authorization: Bearer $BRAND_DEV_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve_by_isin',
    endpoint: '/brand/retrieve-by-isin',
    httpMethod: 'get',
    summary: 'Retrieve brand data by ISIN',
    description:
      'Retrieve brand information using an ISIN (International Securities Identification Number). ',
    stainlessPath: '(resource) brand > (method) retrieve_by_isin',
    qualified: 'client.brand.retrieveByIsin',
    params: [
      'isin: string;',
      'force_language?: string;',
      'maxAgeMs?: number;',
      'maxSpeed?: boolean;',
      'timeoutMS?: number;',
    ],
    response:
      "{ brand?: { address?: { city?: string; country?: string; country_code?: string; postal_code?: string; state_code?: string; state_province?: string; street?: string; }; backdrops?: { colors?: object[]; resolution?: object; url?: string; }[]; colors?: { hex?: string; name?: string; }[]; description?: string; domain?: string; email?: string; industries?: { eic?: object[]; }; is_nsfw?: boolean; links?: { blog?: string; careers?: string; contact?: string; pricing?: string; privacy?: string; terms?: string; }; logos?: { colors?: object[]; mode?: 'light' | 'dark' | 'has_opaque_background'; resolution?: object; type?: 'icon' | 'logo'; url?: string; }[]; phone?: string; primary_language?: string; slogan?: string; socials?: { type?: string; url?: string; }[]; stock?: { exchange?: string; ticker?: string; }; title?: string; }; code?: number; status?: string; }",
    markdown:
      "## retrieve_by_isin\n\n`client.brand.retrieveByIsin(isin: string, force_language?: string, maxAgeMs?: number, maxSpeed?: boolean, timeoutMS?: number): { brand?: object; code?: number; status?: string; }`\n\n**get** `/brand/retrieve-by-isin`\n\nRetrieve brand information using an ISIN (International Securities Identification Number). \n\n### Parameters\n\n- `isin: string`\n  ISIN (International Securities Identification Number) to retrieve brand data for (e.g., 'AU000000IMD5', 'US0378331005'). Must be exactly 12 characters: 2 letters followed by 9 alphanumeric characters and ending with a digit.\n\n- `force_language?: string`\n  Optional parameter to force the language of the retrieved brand data.\n\n- `maxAgeMs?: number`\n  Maximum age in milliseconds for cached brand data before the API performs a hard refresh. Defaults to 3 months (7776000000 ms). Values below 1 day (86400000 ms) are clamped to 1 day; values above 1 year (31536000000 ms) are clamped to 1 year.\n\n- `maxSpeed?: boolean`\n  Optional parameter to optimize the API call for maximum speed. When set to true, the API will skip time-consuming operations for faster response at the cost of less comprehensive data.\n\n- `timeoutMS?: number`\n  Optional timeout in milliseconds for the request. If the request takes longer than this value, it will be aborted with a 408 status code. Maximum allowed value is 300000ms (5 minutes).\n\n### Returns\n\n- `{ brand?: { address?: { city?: string; country?: string; country_code?: string; postal_code?: string; state_code?: string; state_province?: string; street?: string; }; backdrops?: { colors?: object[]; resolution?: object; url?: string; }[]; colors?: { hex?: string; name?: string; }[]; description?: string; domain?: string; email?: string; industries?: { eic?: object[]; }; is_nsfw?: boolean; links?: { blog?: string; careers?: string; contact?: string; pricing?: string; privacy?: string; terms?: string; }; logos?: { colors?: object[]; mode?: 'light' | 'dark' | 'has_opaque_background'; resolution?: object; type?: 'icon' | 'logo'; url?: string; }[]; phone?: string; primary_language?: string; slogan?: string; socials?: { type?: string; url?: string; }[]; stock?: { exchange?: string; ticker?: string; }; title?: string; }; code?: number; status?: string; }`\n\n  - `brand?: { address?: { city?: string; country?: string; country_code?: string; postal_code?: string; state_code?: string; state_province?: string; street?: string; }; backdrops?: { colors?: { hex?: string; name?: string; }[]; resolution?: { aspect_ratio?: number; height?: number; width?: number; }; url?: string; }[]; colors?: { hex?: string; name?: string; }[]; description?: string; domain?: string; email?: string; industries?: { eic?: { industry: string; subindustry: string; }[]; }; is_nsfw?: boolean; links?: { blog?: string; careers?: string; contact?: string; pricing?: string; privacy?: string; terms?: string; }; logos?: { colors?: { hex?: string; name?: string; }[]; mode?: 'light' | 'dark' | 'has_opaque_background'; resolution?: { aspect_ratio?: number; height?: number; width?: number; }; type?: 'icon' | 'logo'; url?: string; }[]; phone?: string; primary_language?: string; slogan?: string; socials?: { type?: string; url?: string; }[]; stock?: { exchange?: string; ticker?: string; }; title?: string; }`\n  - `code?: number`\n  - `status?: string`\n\n### Example\n\n```typescript\nimport BrandDev from 'brand.dev';\n\nconst client = new BrandDev();\n\nconst response = await client.brand.retrieveByIsin({ isin: 'SE60513A9993' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.brand.retrieveByIsin',
        example:
          "import BrandDev from 'brand.dev';\n\nconst client = new BrandDev({\n  apiKey: process.env['BRAND_DEV_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.brand.retrieveByIsin({ isin: 'SE60513A9993' });\n\nconsole.log(response.brand);",
      },
      python: {
        method: 'brand.retrieve_by_isin',
        example:
          'import os\nfrom brand.dev import BrandDev\n\nclient = BrandDev(\n    api_key=os.environ.get("BRAND_DEV_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.brand.retrieve_by_isin(\n    isin="SE60513A9993",\n)\nprint(response.brand)',
      },
      java: {
        method: 'brand().retrieveByIsin',
        example:
          'package com.branddev.api.example;\n\nimport com.branddev.api.client.BrandDevClient;\nimport com.branddev.api.client.okhttp.BrandDevOkHttpClient;\nimport com.branddev.api.models.brand.BrandRetrieveByIsinParams;\nimport com.branddev.api.models.brand.BrandRetrieveByIsinResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BrandDevClient client = BrandDevOkHttpClient.fromEnv();\n\n        BrandRetrieveByIsinParams params = BrandRetrieveByIsinParams.builder()\n            .isin("SE60513A9993")\n            .build();\n        BrandRetrieveByIsinResponse response = client.brand().retrieveByIsin(params);\n    }\n}',
      },
      ruby: {
        method: 'brand.retrieve_by_isin',
        example:
          'require "brand_dev"\n\nbrand_dev = BrandDev::Client.new(api_key: "My API Key")\n\nresponse = brand_dev.brand.retrieve_by_isin(isin: "SE60513A9993")\n\nputs(response)',
      },
      http: {
        example:
          'curl https://api.brand.dev/v1/brand/retrieve-by-isin \\\n    -H "Authorization: Bearer $BRAND_DEV_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve_by_name',
    endpoint: '/brand/retrieve-by-name',
    httpMethod: 'get',
    summary: 'Retrieve brand data by company name',
    description: 'Retrieve brand information using a company name.',
    stainlessPath: '(resource) brand > (method) retrieve_by_name',
    qualified: 'client.brand.retrieveByName',
    params: [
      'name: string;',
      'country_gl?: string;',
      'force_language?: string;',
      'maxAgeMs?: number;',
      'maxSpeed?: boolean;',
      'timeoutMS?: number;',
    ],
    response:
      "{ brand?: { address?: { city?: string; country?: string; country_code?: string; postal_code?: string; state_code?: string; state_province?: string; street?: string; }; backdrops?: { colors?: object[]; resolution?: object; url?: string; }[]; colors?: { hex?: string; name?: string; }[]; description?: string; domain?: string; email?: string; industries?: { eic?: object[]; }; is_nsfw?: boolean; links?: { blog?: string; careers?: string; contact?: string; pricing?: string; privacy?: string; terms?: string; }; logos?: { colors?: object[]; mode?: 'light' | 'dark' | 'has_opaque_background'; resolution?: object; type?: 'icon' | 'logo'; url?: string; }[]; phone?: string; primary_language?: string; slogan?: string; socials?: { type?: string; url?: string; }[]; stock?: { exchange?: string; ticker?: string; }; title?: string; }; code?: number; status?: string; }",
    markdown:
      "## retrieve_by_name\n\n`client.brand.retrieveByName(name: string, country_gl?: string, force_language?: string, maxAgeMs?: number, maxSpeed?: boolean, timeoutMS?: number): { brand?: object; code?: number; status?: string; }`\n\n**get** `/brand/retrieve-by-name`\n\nRetrieve brand information using a company name.\n\n### Parameters\n\n- `name: string`\n  Company name to retrieve brand data for (e.g., 'Apple Inc', 'Microsoft Corporation'). Must be 3-30 characters.\n\n- `country_gl?: string`\n  Optional country code hint (GL parameter) to specify the country for the company name.\n\n- `force_language?: string`\n  Optional parameter to force the language of the retrieved brand data.\n\n- `maxAgeMs?: number`\n  Maximum age in milliseconds for cached brand data before the API performs a hard refresh. Defaults to 3 months (7776000000 ms). Values below 1 day (86400000 ms) are clamped to 1 day; values above 1 year (31536000000 ms) are clamped to 1 year.\n\n- `maxSpeed?: boolean`\n  Optional parameter to optimize the API call for maximum speed. When set to true, the API will skip time-consuming operations for faster response at the cost of less comprehensive data.\n\n- `timeoutMS?: number`\n  Optional timeout in milliseconds for the request. If the request takes longer than this value, it will be aborted with a 408 status code. Maximum allowed value is 300000ms (5 minutes).\n\n### Returns\n\n- `{ brand?: { address?: { city?: string; country?: string; country_code?: string; postal_code?: string; state_code?: string; state_province?: string; street?: string; }; backdrops?: { colors?: object[]; resolution?: object; url?: string; }[]; colors?: { hex?: string; name?: string; }[]; description?: string; domain?: string; email?: string; industries?: { eic?: object[]; }; is_nsfw?: boolean; links?: { blog?: string; careers?: string; contact?: string; pricing?: string; privacy?: string; terms?: string; }; logos?: { colors?: object[]; mode?: 'light' | 'dark' | 'has_opaque_background'; resolution?: object; type?: 'icon' | 'logo'; url?: string; }[]; phone?: string; primary_language?: string; slogan?: string; socials?: { type?: string; url?: string; }[]; stock?: { exchange?: string; ticker?: string; }; title?: string; }; code?: number; status?: string; }`\n\n  - `brand?: { address?: { city?: string; country?: string; country_code?: string; postal_code?: string; state_code?: string; state_province?: string; street?: string; }; backdrops?: { colors?: { hex?: string; name?: string; }[]; resolution?: { aspect_ratio?: number; height?: number; width?: number; }; url?: string; }[]; colors?: { hex?: string; name?: string; }[]; description?: string; domain?: string; email?: string; industries?: { eic?: { industry: string; subindustry: string; }[]; }; is_nsfw?: boolean; links?: { blog?: string; careers?: string; contact?: string; pricing?: string; privacy?: string; terms?: string; }; logos?: { colors?: { hex?: string; name?: string; }[]; mode?: 'light' | 'dark' | 'has_opaque_background'; resolution?: { aspect_ratio?: number; height?: number; width?: number; }; type?: 'icon' | 'logo'; url?: string; }[]; phone?: string; primary_language?: string; slogan?: string; socials?: { type?: string; url?: string; }[]; stock?: { exchange?: string; ticker?: string; }; title?: string; }`\n  - `code?: number`\n  - `status?: string`\n\n### Example\n\n```typescript\nimport BrandDev from 'brand.dev';\n\nconst client = new BrandDev();\n\nconst response = await client.brand.retrieveByName({ name: 'xxx' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.brand.retrieveByName',
        example:
          "import BrandDev from 'brand.dev';\n\nconst client = new BrandDev({\n  apiKey: process.env['BRAND_DEV_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.brand.retrieveByName({ name: 'xxx' });\n\nconsole.log(response.brand);",
      },
      python: {
        method: 'brand.retrieve_by_name',
        example:
          'import os\nfrom brand.dev import BrandDev\n\nclient = BrandDev(\n    api_key=os.environ.get("BRAND_DEV_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.brand.retrieve_by_name(\n    name="xxx",\n)\nprint(response.brand)',
      },
      java: {
        method: 'brand().retrieveByName',
        example:
          'package com.branddev.api.example;\n\nimport com.branddev.api.client.BrandDevClient;\nimport com.branddev.api.client.okhttp.BrandDevOkHttpClient;\nimport com.branddev.api.models.brand.BrandRetrieveByNameParams;\nimport com.branddev.api.models.brand.BrandRetrieveByNameResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BrandDevClient client = BrandDevOkHttpClient.fromEnv();\n\n        BrandRetrieveByNameParams params = BrandRetrieveByNameParams.builder()\n            .name("xxx")\n            .build();\n        BrandRetrieveByNameResponse response = client.brand().retrieveByName(params);\n    }\n}',
      },
      ruby: {
        method: 'brand.retrieve_by_name',
        example:
          'require "brand_dev"\n\nbrand_dev = BrandDev::Client.new(api_key: "My API Key")\n\nresponse = brand_dev.brand.retrieve_by_name(name: "xxx")\n\nputs(response)',
      },
      http: {
        example:
          'curl https://api.brand.dev/v1/brand/retrieve-by-name \\\n    -H "Authorization: Bearer $BRAND_DEV_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve_by_email',
    endpoint: '/brand/retrieve-by-email',
    httpMethod: 'get',
    summary: 'Retrieve brand data by email address',
    description:
      'Retrieve brand information using an email address while detecting disposable and free email addresses. Disposable and free email addresses (like gmail.com, yahoo.com) will throw a 422 error.',
    stainlessPath: '(resource) brand > (method) retrieve_by_email',
    qualified: 'client.brand.retrieveByEmail',
    params: [
      'email: string;',
      'force_language?: string;',
      'maxAgeMs?: number;',
      'maxSpeed?: boolean;',
      'timeoutMS?: number;',
    ],
    response:
      "{ brand?: { address?: { city?: string; country?: string; country_code?: string; postal_code?: string; state_code?: string; state_province?: string; street?: string; }; backdrops?: { colors?: object[]; resolution?: object; url?: string; }[]; colors?: { hex?: string; name?: string; }[]; description?: string; domain?: string; email?: string; industries?: { eic?: object[]; }; is_nsfw?: boolean; links?: { blog?: string; careers?: string; contact?: string; pricing?: string; privacy?: string; terms?: string; }; logos?: { colors?: object[]; mode?: 'light' | 'dark' | 'has_opaque_background'; resolution?: object; type?: 'icon' | 'logo'; url?: string; }[]; phone?: string; primary_language?: string; slogan?: string; socials?: { type?: string; url?: string; }[]; stock?: { exchange?: string; ticker?: string; }; title?: string; }; code?: number; status?: string; }",
    markdown:
      "## retrieve_by_email\n\n`client.brand.retrieveByEmail(email: string, force_language?: string, maxAgeMs?: number, maxSpeed?: boolean, timeoutMS?: number): { brand?: object; code?: number; status?: string; }`\n\n**get** `/brand/retrieve-by-email`\n\nRetrieve brand information using an email address while detecting disposable and free email addresses. Disposable and free email addresses (like gmail.com, yahoo.com) will throw a 422 error.\n\n### Parameters\n\n- `email: string`\n  Email address to retrieve brand data for (e.g., 'contact@example.com'). The domain will be extracted from the email. Free email providers (gmail.com, yahoo.com, etc.) and disposable email addresses are not allowed.\n\n- `force_language?: string`\n  Optional parameter to force the language of the retrieved brand data.\n\n- `maxAgeMs?: number`\n  Maximum age in milliseconds for cached brand data before the API performs a hard refresh. Defaults to 3 months (7776000000 ms). Values below 1 day (86400000 ms) are clamped to 1 day; values above 1 year (31536000000 ms) are clamped to 1 year.\n\n- `maxSpeed?: boolean`\n  Optional parameter to optimize the API call for maximum speed. When set to true, the API will skip time-consuming operations for faster response at the cost of less comprehensive data.\n\n- `timeoutMS?: number`\n  Optional timeout in milliseconds for the request. If the request takes longer than this value, it will be aborted with a 408 status code. Maximum allowed value is 300000ms (5 minutes).\n\n### Returns\n\n- `{ brand?: { address?: { city?: string; country?: string; country_code?: string; postal_code?: string; state_code?: string; state_province?: string; street?: string; }; backdrops?: { colors?: object[]; resolution?: object; url?: string; }[]; colors?: { hex?: string; name?: string; }[]; description?: string; domain?: string; email?: string; industries?: { eic?: object[]; }; is_nsfw?: boolean; links?: { blog?: string; careers?: string; contact?: string; pricing?: string; privacy?: string; terms?: string; }; logos?: { colors?: object[]; mode?: 'light' | 'dark' | 'has_opaque_background'; resolution?: object; type?: 'icon' | 'logo'; url?: string; }[]; phone?: string; primary_language?: string; slogan?: string; socials?: { type?: string; url?: string; }[]; stock?: { exchange?: string; ticker?: string; }; title?: string; }; code?: number; status?: string; }`\n\n  - `brand?: { address?: { city?: string; country?: string; country_code?: string; postal_code?: string; state_code?: string; state_province?: string; street?: string; }; backdrops?: { colors?: { hex?: string; name?: string; }[]; resolution?: { aspect_ratio?: number; height?: number; width?: number; }; url?: string; }[]; colors?: { hex?: string; name?: string; }[]; description?: string; domain?: string; email?: string; industries?: { eic?: { industry: string; subindustry: string; }[]; }; is_nsfw?: boolean; links?: { blog?: string; careers?: string; contact?: string; pricing?: string; privacy?: string; terms?: string; }; logos?: { colors?: { hex?: string; name?: string; }[]; mode?: 'light' | 'dark' | 'has_opaque_background'; resolution?: { aspect_ratio?: number; height?: number; width?: number; }; type?: 'icon' | 'logo'; url?: string; }[]; phone?: string; primary_language?: string; slogan?: string; socials?: { type?: string; url?: string; }[]; stock?: { exchange?: string; ticker?: string; }; title?: string; }`\n  - `code?: number`\n  - `status?: string`\n\n### Example\n\n```typescript\nimport BrandDev from 'brand.dev';\n\nconst client = new BrandDev();\n\nconst response = await client.brand.retrieveByEmail({ email: 'dev@stainless.com' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.brand.retrieveByEmail',
        example:
          "import BrandDev from 'brand.dev';\n\nconst client = new BrandDev({\n  apiKey: process.env['BRAND_DEV_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.brand.retrieveByEmail({ email: 'dev@stainless.com' });\n\nconsole.log(response.brand);",
      },
      python: {
        method: 'brand.retrieve_by_email',
        example:
          'import os\nfrom brand.dev import BrandDev\n\nclient = BrandDev(\n    api_key=os.environ.get("BRAND_DEV_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.brand.retrieve_by_email(\n    email="dev@stainless.com",\n)\nprint(response.brand)',
      },
      java: {
        method: 'brand().retrieveByEmail',
        example:
          'package com.branddev.api.example;\n\nimport com.branddev.api.client.BrandDevClient;\nimport com.branddev.api.client.okhttp.BrandDevOkHttpClient;\nimport com.branddev.api.models.brand.BrandRetrieveByEmailParams;\nimport com.branddev.api.models.brand.BrandRetrieveByEmailResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BrandDevClient client = BrandDevOkHttpClient.fromEnv();\n\n        BrandRetrieveByEmailParams params = BrandRetrieveByEmailParams.builder()\n            .email("dev@stainless.com")\n            .build();\n        BrandRetrieveByEmailResponse response = client.brand().retrieveByEmail(params);\n    }\n}',
      },
      ruby: {
        method: 'brand.retrieve_by_email',
        example:
          'require "brand_dev"\n\nbrand_dev = BrandDev::Client.new(api_key: "My API Key")\n\nresponse = brand_dev.brand.retrieve_by_email(email: "dev@stainless.com")\n\nputs(response)',
      },
      http: {
        example:
          'curl https://api.brand.dev/v1/brand/retrieve-by-email \\\n    -H "Authorization: Bearer $BRAND_DEV_API_KEY"',
      },
    },
  },
  {
    name: 'identify_from_transaction',
    endpoint: '/brand/transaction_identifier',
    httpMethod: 'get',
    summary: 'Identify brand from transaction data',
    description:
      'Endpoint specially designed for platforms that want to identify transaction data by the transaction title.',
    stainlessPath: '(resource) brand > (method) identify_from_transaction',
    qualified: 'client.brand.identifyFromTransaction',
    params: [
      'transaction_info: string;',
      'city?: string;',
      'country_gl?: string;',
      'force_language?: string;',
      'high_confidence_only?: boolean;',
      'maxSpeed?: boolean;',
      'mcc?: string;',
      'phone?: number;',
      'timeoutMS?: number;',
    ],
    response:
      "{ brand?: { address?: { city?: string; country?: string; country_code?: string; postal_code?: string; state_code?: string; state_province?: string; street?: string; }; backdrops?: { colors?: object[]; resolution?: object; url?: string; }[]; colors?: { hex?: string; name?: string; }[]; description?: string; domain?: string; email?: string; industries?: { eic?: object[]; }; is_nsfw?: boolean; links?: { blog?: string; careers?: string; contact?: string; pricing?: string; privacy?: string; terms?: string; }; logos?: { colors?: object[]; mode?: 'light' | 'dark' | 'has_opaque_background'; resolution?: object; type?: 'icon' | 'logo'; url?: string; }[]; phone?: string; primary_language?: string; slogan?: string; socials?: { type?: string; url?: string; }[]; stock?: { exchange?: string; ticker?: string; }; title?: string; }; code?: number; status?: string; }",
    markdown:
      "## identify_from_transaction\n\n`client.brand.identifyFromTransaction(transaction_info: string, city?: string, country_gl?: string, force_language?: string, high_confidence_only?: boolean, maxSpeed?: boolean, mcc?: string, phone?: number, timeoutMS?: number): { brand?: object; code?: number; status?: string; }`\n\n**get** `/brand/transaction_identifier`\n\nEndpoint specially designed for platforms that want to identify transaction data by the transaction title.\n\n### Parameters\n\n- `transaction_info: string`\n  Transaction information to identify the brand\n\n- `city?: string`\n  Optional city name to prioritize when searching for the brand.\n\n- `country_gl?: string`\n  Optional country code (GL parameter) to specify the country. This affects the geographic location used for search queries.\n\n- `force_language?: string`\n  Optional parameter to force the language of the retrieved brand data.\n\n- `high_confidence_only?: boolean`\n  When set to true, the API will perform an additional verification steps to ensure the identified brand matches the transaction with high confidence.\n\n- `maxSpeed?: boolean`\n  Optional parameter to optimize the API call for maximum speed. When set to true, the API will skip time-consuming operations for faster response at the cost of less comprehensive data.\n\n- `mcc?: string`\n  Optional Merchant Category Code (MCC) to help identify the business category/industry. \n\n- `phone?: number`\n  Optional phone number from the transaction to help verify brand match.\n\n- `timeoutMS?: number`\n  Optional timeout in milliseconds for the request. If the request takes longer than this value, it will be aborted with a 408 status code. Maximum allowed value is 300000ms (5 minutes).\n\n### Returns\n\n- `{ brand?: { address?: { city?: string; country?: string; country_code?: string; postal_code?: string; state_code?: string; state_province?: string; street?: string; }; backdrops?: { colors?: object[]; resolution?: object; url?: string; }[]; colors?: { hex?: string; name?: string; }[]; description?: string; domain?: string; email?: string; industries?: { eic?: object[]; }; is_nsfw?: boolean; links?: { blog?: string; careers?: string; contact?: string; pricing?: string; privacy?: string; terms?: string; }; logos?: { colors?: object[]; mode?: 'light' | 'dark' | 'has_opaque_background'; resolution?: object; type?: 'icon' | 'logo'; url?: string; }[]; phone?: string; primary_language?: string; slogan?: string; socials?: { type?: string; url?: string; }[]; stock?: { exchange?: string; ticker?: string; }; title?: string; }; code?: number; status?: string; }`\n\n  - `brand?: { address?: { city?: string; country?: string; country_code?: string; postal_code?: string; state_code?: string; state_province?: string; street?: string; }; backdrops?: { colors?: { hex?: string; name?: string; }[]; resolution?: { aspect_ratio?: number; height?: number; width?: number; }; url?: string; }[]; colors?: { hex?: string; name?: string; }[]; description?: string; domain?: string; email?: string; industries?: { eic?: { industry: string; subindustry: string; }[]; }; is_nsfw?: boolean; links?: { blog?: string; careers?: string; contact?: string; pricing?: string; privacy?: string; terms?: string; }; logos?: { colors?: { hex?: string; name?: string; }[]; mode?: 'light' | 'dark' | 'has_opaque_background'; resolution?: { aspect_ratio?: number; height?: number; width?: number; }; type?: 'icon' | 'logo'; url?: string; }[]; phone?: string; primary_language?: string; slogan?: string; socials?: { type?: string; url?: string; }[]; stock?: { exchange?: string; ticker?: string; }; title?: string; }`\n  - `code?: number`\n  - `status?: string`\n\n### Example\n\n```typescript\nimport BrandDev from 'brand.dev';\n\nconst client = new BrandDev();\n\nconst response = await client.brand.identifyFromTransaction({ transaction_info: 'transaction_info' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.brand.identifyFromTransaction',
        example:
          "import BrandDev from 'brand.dev';\n\nconst client = new BrandDev({\n  apiKey: process.env['BRAND_DEV_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.brand.identifyFromTransaction({\n  transaction_info: 'transaction_info',\n});\n\nconsole.log(response.brand);",
      },
      python: {
        method: 'brand.identify_from_transaction',
        example:
          'import os\nfrom brand.dev import BrandDev\n\nclient = BrandDev(\n    api_key=os.environ.get("BRAND_DEV_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.brand.identify_from_transaction(\n    transaction_info="transaction_info",\n)\nprint(response.brand)',
      },
      java: {
        method: 'brand().identifyFromTransaction',
        example:
          'package com.branddev.api.example;\n\nimport com.branddev.api.client.BrandDevClient;\nimport com.branddev.api.client.okhttp.BrandDevOkHttpClient;\nimport com.branddev.api.models.brand.BrandIdentifyFromTransactionParams;\nimport com.branddev.api.models.brand.BrandIdentifyFromTransactionResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BrandDevClient client = BrandDevOkHttpClient.fromEnv();\n\n        BrandIdentifyFromTransactionParams params = BrandIdentifyFromTransactionParams.builder()\n            .transactionInfo("transaction_info")\n            .build();\n        BrandIdentifyFromTransactionResponse response = client.brand().identifyFromTransaction(params);\n    }\n}',
      },
      ruby: {
        method: 'brand.identify_from_transaction',
        example:
          'require "brand_dev"\n\nbrand_dev = BrandDev::Client.new(api_key: "My API Key")\n\nresponse = brand_dev.brand.identify_from_transaction(transaction_info: "transaction_info")\n\nputs(response)',
      },
      http: {
        example:
          'curl https://api.brand.dev/v1/brand/transaction_identifier \\\n    -H "Authorization: Bearer $BRAND_DEV_API_KEY"',
      },
    },
  },
  {
    name: 'ai_query',
    endpoint: '/brand/ai/query',
    httpMethod: 'post',
    summary: 'Query website data using AI',
    description:
      "Use AI to extract specific data points from a brand's website. The AI will crawl the website and extract the requested information based on the provided data points.",
    stainlessPath: '(resource) brand > (method) ai_query',
    qualified: 'client.brand.aiQuery',
    params: [
      "data_to_extract: { datapoint_description: string; datapoint_example: string; datapoint_name: string; datapoint_type: 'text' | 'number' | 'date' | 'boolean' | 'list' | 'url'; datapoint_list_type?: 'string' | 'text' | 'number' | 'date' | 'boolean' | 'list' | 'url' | 'object'; datapoint_object_schema?: object; }[];",
      'domain: string;',
      'specific_pages?: { about_us?: boolean; blog?: boolean; careers?: boolean; contact_us?: boolean; faq?: boolean; home_page?: boolean; pricing?: boolean; privacy_policy?: boolean; terms_and_conditions?: boolean; };',
      'timeoutMS?: number;',
    ],
    response:
      '{ data_extracted?: { datapoint_name?: string; datapoint_value?: string | number | boolean | string[] | number[] | object[]; }[]; domain?: string; status?: string; urls_analyzed?: string[]; }',
    markdown:
      "## ai_query\n\n`client.brand.aiQuery(data_to_extract: { datapoint_description: string; datapoint_example: string; datapoint_name: string; datapoint_type: 'text' | 'number' | 'date' | 'boolean' | 'list' | 'url'; datapoint_list_type?: 'string' | 'text' | 'number' | 'date' | 'boolean' | 'list' | 'url' | 'object'; datapoint_object_schema?: object; }[], domain: string, specific_pages?: { about_us?: boolean; blog?: boolean; careers?: boolean; contact_us?: boolean; faq?: boolean; home_page?: boolean; pricing?: boolean; privacy_policy?: boolean; terms_and_conditions?: boolean; }, timeoutMS?: number): { data_extracted?: object[]; domain?: string; status?: string; urls_analyzed?: string[]; }`\n\n**post** `/brand/ai/query`\n\nUse AI to extract specific data points from a brand's website. The AI will crawl the website and extract the requested information based on the provided data points.\n\n### Parameters\n\n- `data_to_extract: { datapoint_description: string; datapoint_example: string; datapoint_name: string; datapoint_type: 'text' | 'number' | 'date' | 'boolean' | 'list' | 'url'; datapoint_list_type?: 'string' | 'text' | 'number' | 'date' | 'boolean' | 'list' | 'url' | 'object'; datapoint_object_schema?: object; }[]`\n  Array of data points to extract from the website\n\n- `domain: string`\n  The domain name to analyze\n\n- `specific_pages?: { about_us?: boolean; blog?: boolean; careers?: boolean; contact_us?: boolean; faq?: boolean; home_page?: boolean; pricing?: boolean; privacy_policy?: boolean; terms_and_conditions?: boolean; }`\n  Optional object specifying which pages to analyze\n  - `about_us?: boolean`\n    Whether to analyze the about us page\n  - `blog?: boolean`\n    Whether to analyze the blog\n  - `careers?: boolean`\n    Whether to analyze the careers page\n  - `contact_us?: boolean`\n    Whether to analyze the contact us page\n  - `faq?: boolean`\n    Whether to analyze the FAQ page\n  - `home_page?: boolean`\n    Whether to analyze the home page\n  - `pricing?: boolean`\n    Whether to analyze the pricing page\n  - `privacy_policy?: boolean`\n    Whether to analyze the privacy policy page\n  - `terms_and_conditions?: boolean`\n    Whether to analyze the terms and conditions page\n\n- `timeoutMS?: number`\n  Optional timeout in milliseconds for the request. If the request takes longer than this value, it will be aborted with a 408 status code. Maximum allowed value is 300000ms (5 minutes).\n\n### Returns\n\n- `{ data_extracted?: { datapoint_name?: string; datapoint_value?: string | number | boolean | string[] | number[] | object[]; }[]; domain?: string; status?: string; urls_analyzed?: string[]; }`\n\n  - `data_extracted?: { datapoint_name?: string; datapoint_value?: string | number | boolean | string[] | number[] | object[]; }[]`\n  - `domain?: string`\n  - `status?: string`\n  - `urls_analyzed?: string[]`\n\n### Example\n\n```typescript\nimport BrandDev from 'brand.dev';\n\nconst client = new BrandDev();\n\nconst response = await client.brand.aiQuery({ data_to_extract: [{\n  datapoint_description: 'datapoint_description',\n  datapoint_example: 'datapoint_example',\n  datapoint_name: 'datapoint_name',\n  datapoint_type: 'text',\n}], domain: 'domain' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.brand.aiQuery',
        example:
          "import BrandDev from 'brand.dev';\n\nconst client = new BrandDev({\n  apiKey: process.env['BRAND_DEV_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.brand.aiQuery({\n  data_to_extract: [\n    {\n      datapoint_description: 'datapoint_description',\n      datapoint_example: 'datapoint_example',\n      datapoint_name: 'datapoint_name',\n      datapoint_type: 'text',\n    },\n  ],\n  domain: 'domain',\n});\n\nconsole.log(response.data_extracted);",
      },
      python: {
        method: 'brand.ai_query',
        example:
          'import os\nfrom brand.dev import BrandDev\n\nclient = BrandDev(\n    api_key=os.environ.get("BRAND_DEV_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.brand.ai_query(\n    data_to_extract=[{\n        "datapoint_description": "datapoint_description",\n        "datapoint_example": "datapoint_example",\n        "datapoint_name": "datapoint_name",\n        "datapoint_type": "text",\n    }],\n    domain="domain",\n)\nprint(response.data_extracted)',
      },
      java: {
        method: 'brand().aiQuery',
        example:
          'package com.branddev.api.example;\n\nimport com.branddev.api.client.BrandDevClient;\nimport com.branddev.api.client.okhttp.BrandDevOkHttpClient;\nimport com.branddev.api.models.brand.BrandAiQueryParams;\nimport com.branddev.api.models.brand.BrandAiQueryResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BrandDevClient client = BrandDevOkHttpClient.fromEnv();\n\n        BrandAiQueryParams params = BrandAiQueryParams.builder()\n            .addDataToExtract(BrandAiQueryParams.DataToExtract.builder()\n                .datapointDescription("datapoint_description")\n                .datapointExample("datapoint_example")\n                .datapointName("datapoint_name")\n                .datapointType(BrandAiQueryParams.DataToExtract.DatapointType.TEXT)\n                .build())\n            .domain("domain")\n            .build();\n        BrandAiQueryResponse response = client.brand().aiQuery(params);\n    }\n}',
      },
      ruby: {
        method: 'brand.ai_query',
        example:
          'require "brand_dev"\n\nbrand_dev = BrandDev::Client.new(api_key: "My API Key")\n\nresponse = brand_dev.brand.ai_query(\n  data_to_extract: [\n    {\n      datapoint_description: "datapoint_description",\n      datapoint_example: "datapoint_example",\n      datapoint_name: "datapoint_name",\n      datapoint_type: :text\n    }\n  ],\n  domain: "domain"\n)\n\nputs(response)',
      },
      http: {
        example:
          'curl https://api.brand.dev/v1/brand/ai/query \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $BRAND_DEV_API_KEY" \\\n    -d \'{\n          "data_to_extract": [\n            {\n              "datapoint_description": "datapoint_description",\n              "datapoint_example": "datapoint_example",\n              "datapoint_name": "datapoint_name",\n              "datapoint_type": "text"\n            }\n          ],\n          "domain": "domain"\n        }\'',
      },
    },
  },
  {
    name: 'prefetch',
    endpoint: '/brand/prefetch',
    httpMethod: 'post',
    summary: 'Prefetch brand data for a domain',
    description: 'Signal that you may fetch brand data for a particular domain soon to improve latency.',
    stainlessPath: '(resource) brand > (method) prefetch',
    qualified: 'client.brand.prefetch',
    params: ['domain: string;', 'timeoutMS?: number;'],
    response: '{ domain?: string; message?: string; status?: string; }',
    markdown:
      "## prefetch\n\n`client.brand.prefetch(domain: string, timeoutMS?: number): { domain?: string; message?: string; status?: string; }`\n\n**post** `/brand/prefetch`\n\nSignal that you may fetch brand data for a particular domain soon to improve latency.\n\n### Parameters\n\n- `domain: string`\n  Domain name to prefetch brand data for\n\n- `timeoutMS?: number`\n  Optional timeout in milliseconds for the request. If the request takes longer than this value, it will be aborted with a 408 status code. Maximum allowed value is 300000ms (5 minutes).\n\n### Returns\n\n- `{ domain?: string; message?: string; status?: string; }`\n\n  - `domain?: string`\n  - `message?: string`\n  - `status?: string`\n\n### Example\n\n```typescript\nimport BrandDev from 'brand.dev';\n\nconst client = new BrandDev();\n\nconst response = await client.brand.prefetch({ domain: 'domain' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.brand.prefetch',
        example:
          "import BrandDev from 'brand.dev';\n\nconst client = new BrandDev({\n  apiKey: process.env['BRAND_DEV_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.brand.prefetch({ domain: 'domain' });\n\nconsole.log(response.domain);",
      },
      python: {
        method: 'brand.prefetch',
        example:
          'import os\nfrom brand.dev import BrandDev\n\nclient = BrandDev(\n    api_key=os.environ.get("BRAND_DEV_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.brand.prefetch(\n    domain="domain",\n)\nprint(response.domain)',
      },
      java: {
        method: 'brand().prefetch',
        example:
          'package com.branddev.api.example;\n\nimport com.branddev.api.client.BrandDevClient;\nimport com.branddev.api.client.okhttp.BrandDevOkHttpClient;\nimport com.branddev.api.models.brand.BrandPrefetchParams;\nimport com.branddev.api.models.brand.BrandPrefetchResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BrandDevClient client = BrandDevOkHttpClient.fromEnv();\n\n        BrandPrefetchParams params = BrandPrefetchParams.builder()\n            .domain("domain")\n            .build();\n        BrandPrefetchResponse response = client.brand().prefetch(params);\n    }\n}',
      },
      ruby: {
        method: 'brand.prefetch',
        example:
          'require "brand_dev"\n\nbrand_dev = BrandDev::Client.new(api_key: "My API Key")\n\nresponse = brand_dev.brand.prefetch(domain: "domain")\n\nputs(response)',
      },
      http: {
        example:
          'curl https://api.brand.dev/v1/brand/prefetch \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $BRAND_DEV_API_KEY" \\\n    -d \'{\n          "domain": "domain"\n        }\'',
      },
    },
  },
  {
    name: 'prefetch_by_email',
    endpoint: '/brand/prefetch-by-email',
    httpMethod: 'post',
    summary: 'Prefetch brand data by email',
    description:
      "Signal that you may fetch brand data for a particular domain soon to improve latency. This endpoint accepts an email address, extracts the domain from it, validates that it's not a disposable or free email provider, and queues the domain for prefetching.",
    stainlessPath: '(resource) brand > (method) prefetch_by_email',
    qualified: 'client.brand.prefetchByEmail',
    params: ['email: string;', 'timeoutMS?: number;'],
    response: '{ domain?: string; message?: string; status?: string; }',
    markdown:
      "## prefetch_by_email\n\n`client.brand.prefetchByEmail(email: string, timeoutMS?: number): { domain?: string; message?: string; status?: string; }`\n\n**post** `/brand/prefetch-by-email`\n\nSignal that you may fetch brand data for a particular domain soon to improve latency. This endpoint accepts an email address, extracts the domain from it, validates that it's not a disposable or free email provider, and queues the domain for prefetching.\n\n### Parameters\n\n- `email: string`\n  Email address to prefetch brand data for. The domain will be extracted from the email. Free email providers (gmail.com, yahoo.com, etc.) and disposable email addresses are not allowed.\n\n- `timeoutMS?: number`\n  Optional timeout in milliseconds for the request. If the request takes longer than this value, it will be aborted with a 408 status code. Maximum allowed value is 300000ms (5 minutes).\n\n### Returns\n\n- `{ domain?: string; message?: string; status?: string; }`\n\n  - `domain?: string`\n  - `message?: string`\n  - `status?: string`\n\n### Example\n\n```typescript\nimport BrandDev from 'brand.dev';\n\nconst client = new BrandDev();\n\nconst response = await client.brand.prefetchByEmail({ email: 'dev@stainless.com' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.brand.prefetchByEmail',
        example:
          "import BrandDev from 'brand.dev';\n\nconst client = new BrandDev({\n  apiKey: process.env['BRAND_DEV_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.brand.prefetchByEmail({ email: 'dev@stainless.com' });\n\nconsole.log(response.domain);",
      },
      python: {
        method: 'brand.prefetch_by_email',
        example:
          'import os\nfrom brand.dev import BrandDev\n\nclient = BrandDev(\n    api_key=os.environ.get("BRAND_DEV_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.brand.prefetch_by_email(\n    email="dev@stainless.com",\n)\nprint(response.domain)',
      },
      java: {
        method: 'brand().prefetchByEmail',
        example:
          'package com.branddev.api.example;\n\nimport com.branddev.api.client.BrandDevClient;\nimport com.branddev.api.client.okhttp.BrandDevOkHttpClient;\nimport com.branddev.api.models.brand.BrandPrefetchByEmailParams;\nimport com.branddev.api.models.brand.BrandPrefetchByEmailResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BrandDevClient client = BrandDevOkHttpClient.fromEnv();\n\n        BrandPrefetchByEmailParams params = BrandPrefetchByEmailParams.builder()\n            .email("dev@stainless.com")\n            .build();\n        BrandPrefetchByEmailResponse response = client.brand().prefetchByEmail(params);\n    }\n}',
      },
      ruby: {
        method: 'brand.prefetch_by_email',
        example:
          'require "brand_dev"\n\nbrand_dev = BrandDev::Client.new(api_key: "My API Key")\n\nresponse = brand_dev.brand.prefetch_by_email(email: "dev@stainless.com")\n\nputs(response)',
      },
      http: {
        example:
          'curl https://api.brand.dev/v1/brand/prefetch-by-email \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $BRAND_DEV_API_KEY" \\\n    -d \'{\n          "email": "dev@stainless.com"\n        }\'',
      },
    },
  },
  {
    name: 'retrieve_simplified',
    endpoint: '/brand/retrieve-simplified',
    httpMethod: 'get',
    summary: 'Retrieve simplified brand data by domain',
    description:
      'Returns a simplified version of brand data containing only essential information: domain, title, colors, logos, and backdrops. Optimized for faster responses and reduced data transfer.',
    stainlessPath: '(resource) brand > (method) retrieve_simplified',
    qualified: 'client.brand.retrieveSimplified',
    params: ['domain: string;', 'maxAgeMs?: number;', 'timeoutMS?: number;'],
    response:
      "{ brand?: { backdrops?: { colors?: object[]; resolution?: object; url?: string; }[]; colors?: { hex?: string; name?: string; }[]; domain?: string; logos?: { colors?: object[]; mode?: 'light' | 'dark' | 'has_opaque_background'; resolution?: object; type?: 'icon' | 'logo'; url?: string; }[]; title?: string; }; code?: number; status?: string; }",
    markdown:
      "## retrieve_simplified\n\n`client.brand.retrieveSimplified(domain: string, maxAgeMs?: number, timeoutMS?: number): { brand?: object; code?: number; status?: string; }`\n\n**get** `/brand/retrieve-simplified`\n\nReturns a simplified version of brand data containing only essential information: domain, title, colors, logos, and backdrops. Optimized for faster responses and reduced data transfer.\n\n### Parameters\n\n- `domain: string`\n  Domain name to retrieve simplified brand data for\n\n- `maxAgeMs?: number`\n  Maximum age in milliseconds for cached brand data before the API performs a hard refresh. Defaults to 3 months (7776000000 ms). Values below 1 day (86400000 ms) are clamped to 1 day; values above 1 year (31536000000 ms) are clamped to 1 year.\n\n- `timeoutMS?: number`\n  Optional timeout in milliseconds for the request. If the request takes longer than this value, it will be aborted with a 408 status code. Maximum allowed value is 300000ms (5 minutes).\n\n### Returns\n\n- `{ brand?: { backdrops?: { colors?: object[]; resolution?: object; url?: string; }[]; colors?: { hex?: string; name?: string; }[]; domain?: string; logos?: { colors?: object[]; mode?: 'light' | 'dark' | 'has_opaque_background'; resolution?: object; type?: 'icon' | 'logo'; url?: string; }[]; title?: string; }; code?: number; status?: string; }`\n\n  - `brand?: { backdrops?: { colors?: { hex?: string; name?: string; }[]; resolution?: { aspect_ratio?: number; height?: number; width?: number; }; url?: string; }[]; colors?: { hex?: string; name?: string; }[]; domain?: string; logos?: { colors?: { hex?: string; name?: string; }[]; mode?: 'light' | 'dark' | 'has_opaque_background'; resolution?: { aspect_ratio?: number; height?: number; width?: number; }; type?: 'icon' | 'logo'; url?: string; }[]; title?: string; }`\n  - `code?: number`\n  - `status?: string`\n\n### Example\n\n```typescript\nimport BrandDev from 'brand.dev';\n\nconst client = new BrandDev();\n\nconst response = await client.brand.retrieveSimplified({ domain: 'domain' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.brand.retrieveSimplified',
        example:
          "import BrandDev from 'brand.dev';\n\nconst client = new BrandDev({\n  apiKey: process.env['BRAND_DEV_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.brand.retrieveSimplified({ domain: 'domain' });\n\nconsole.log(response.brand);",
      },
      python: {
        method: 'brand.retrieve_simplified',
        example:
          'import os\nfrom brand.dev import BrandDev\n\nclient = BrandDev(\n    api_key=os.environ.get("BRAND_DEV_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.brand.retrieve_simplified(\n    domain="domain",\n)\nprint(response.brand)',
      },
      java: {
        method: 'brand().retrieveSimplified',
        example:
          'package com.branddev.api.example;\n\nimport com.branddev.api.client.BrandDevClient;\nimport com.branddev.api.client.okhttp.BrandDevOkHttpClient;\nimport com.branddev.api.models.brand.BrandRetrieveSimplifiedParams;\nimport com.branddev.api.models.brand.BrandRetrieveSimplifiedResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BrandDevClient client = BrandDevOkHttpClient.fromEnv();\n\n        BrandRetrieveSimplifiedParams params = BrandRetrieveSimplifiedParams.builder()\n            .domain("domain")\n            .build();\n        BrandRetrieveSimplifiedResponse response = client.brand().retrieveSimplified(params);\n    }\n}',
      },
      ruby: {
        method: 'brand.retrieve_simplified',
        example:
          'require "brand_dev"\n\nbrand_dev = BrandDev::Client.new(api_key: "My API Key")\n\nresponse = brand_dev.brand.retrieve_simplified(domain: "domain")\n\nputs(response)',
      },
      http: {
        example:
          'curl https://api.brand.dev/v1/brand/retrieve-simplified \\\n    -H "Authorization: Bearer $BRAND_DEV_API_KEY"',
      },
    },
  },
  {
    name: 'ai_products',
    endpoint: '/brand/ai/products',
    httpMethod: 'post',
    summary: "Extract products from a brand's website",
    description:
      "Extract product information from a brand's website. We will analyze the website and return a list of products with details such as name, description, image, pricing, features, and more.",
    stainlessPath: '(resource) brand > (method) ai_products',
    qualified: 'client.brand.aiProducts',
    params: [
      '{ domain: string; maxAgeMs?: number; maxProducts?: number; timeoutMS?: number; } | { directUrl: string; maxAgeMs?: number; maxProducts?: number; timeoutMS?: number; };',
    ],
    response:
      "{ products?: { description: string; features: string[]; images: string[]; name: string; sku: string; tags: string[]; target_audience: string[]; billing_frequency?: 'monthly' | 'yearly' | 'one_time' | 'usage_based'; category?: string; currency?: string; image_url?: string; price?: number; pricing_model?: 'per_seat' | 'flat' | 'tiered' | 'freemium' | 'custom'; url?: string; }[]; }",
    perLanguage: {
      typescript: {
        method: 'client.brand.aiProducts',
        example:
          "import BrandDev from 'brand.dev';\n\nconst client = new BrandDev({\n  apiKey: process.env['BRAND_DEV_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.brand.aiProducts({ domain: 'domain' });\n\nconsole.log(response.products);",
      },
      python: {
        method: 'brand.ai_products',
        example:
          'import os\nfrom brand.dev import BrandDev\n\nclient = BrandDev(\n    api_key=os.environ.get("BRAND_DEV_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.brand.ai_products(\n    domain="domain",\n)\nprint(response.products)',
      },
      java: {
        method: 'brand().aiProducts',
        example:
          'package com.branddev.api.example;\n\nimport com.branddev.api.client.BrandDevClient;\nimport com.branddev.api.client.okhttp.BrandDevOkHttpClient;\nimport com.branddev.api.models.brand.BrandAiProductsParams;\nimport com.branddev.api.models.brand.BrandAiProductsResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BrandDevClient client = BrandDevOkHttpClient.fromEnv();\n\n        BrandAiProductsParams.Body.ByDomain params = BrandAiProductsParams.Body.ByDomain.builder()\n            .domain("domain")\n            .build();\n        BrandAiProductsResponse response = client.brand().aiProducts(params);\n    }\n}',
      },
      ruby: {
        method: 'brand.ai_products',
        example:
          'require "brand_dev"\n\nbrand_dev = BrandDev::Client.new(api_key: "My API Key")\n\nresponse = brand_dev.brand.ai_products(body: {domain: "domain"})\n\nputs(response)',
      },
      http: {
        example:
          'curl https://api.brand.dev/v1/brand/ai/products \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $BRAND_DEV_API_KEY" \\\n    -d \'{\n          "domain": "domain"\n        }\'',
      },
    },
  },
  {
    name: 'ai_product',
    endpoint: '/brand/ai/product',
    httpMethod: 'post',
    summary: 'Extract a single product from a URL',
    description:
      'Given a single URL, determines if it is a product page and extracts the product information.',
    stainlessPath: '(resource) brand > (method) ai_product',
    qualified: 'client.brand.aiProduct',
    params: ['url: string;', 'maxAgeMs?: number;', 'timeoutMS?: number;'],
    response:
      "{ is_product_page?: boolean; platform?: 'amazon' | 'tiktok_shop' | 'etsy' | 'generic'; product?: { description: string; features: string[]; images: string[]; name: string; sku: string; tags: string[]; target_audience: string[]; billing_frequency?: 'monthly' | 'yearly' | 'one_time' | 'usage_based'; category?: string; currency?: string; image_url?: string; price?: number; pricing_model?: 'per_seat' | 'flat' | 'tiered' | 'freemium' | 'custom'; url?: string; }; }",
    markdown:
      "## ai_product\n\n`client.brand.aiProduct(url: string, maxAgeMs?: number, timeoutMS?: number): { is_product_page?: boolean; platform?: 'amazon' | 'tiktok_shop' | 'etsy' | 'generic'; product?: object; }`\n\n**post** `/brand/ai/product`\n\nGiven a single URL, determines if it is a product page and extracts the product information.\n\n### Parameters\n\n- `url: string`\n  The product page URL to extract product data from.\n\n- `maxAgeMs?: number`\n  Return a cached result if a prior scrape for the same parameters exists and is younger than this many milliseconds. Defaults to 7 days (604800000 ms) when omitted. Max is 30 days (2592000000 ms). Set to 0 to always scrape fresh.\n\n- `timeoutMS?: number`\n  Optional timeout in milliseconds for the request. If the request takes longer than this value, it will be aborted with a 408 status code. Maximum allowed value is 300000ms (5 minutes).\n\n### Returns\n\n- `{ is_product_page?: boolean; platform?: 'amazon' | 'tiktok_shop' | 'etsy' | 'generic'; product?: { description: string; features: string[]; images: string[]; name: string; sku: string; tags: string[]; target_audience: string[]; billing_frequency?: 'monthly' | 'yearly' | 'one_time' | 'usage_based'; category?: string; currency?: string; image_url?: string; price?: number; pricing_model?: 'per_seat' | 'flat' | 'tiered' | 'freemium' | 'custom'; url?: string; }; }`\n\n  - `is_product_page?: boolean`\n  - `platform?: 'amazon' | 'tiktok_shop' | 'etsy' | 'generic'`\n  - `product?: { description: string; features: string[]; images: string[]; name: string; sku: string; tags: string[]; target_audience: string[]; billing_frequency?: 'monthly' | 'yearly' | 'one_time' | 'usage_based'; category?: string; currency?: string; image_url?: string; price?: number; pricing_model?: 'per_seat' | 'flat' | 'tiered' | 'freemium' | 'custom'; url?: string; }`\n\n### Example\n\n```typescript\nimport BrandDev from 'brand.dev';\n\nconst client = new BrandDev();\n\nconst response = await client.brand.aiProduct({ url: 'https://example.com' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.brand.aiProduct',
        example:
          "import BrandDev from 'brand.dev';\n\nconst client = new BrandDev({\n  apiKey: process.env['BRAND_DEV_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.brand.aiProduct({ url: 'https://example.com' });\n\nconsole.log(response.is_product_page);",
      },
      python: {
        method: 'brand.ai_product',
        example:
          'import os\nfrom brand.dev import BrandDev\n\nclient = BrandDev(\n    api_key=os.environ.get("BRAND_DEV_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.brand.ai_product(\n    url="https://example.com",\n)\nprint(response.is_product_page)',
      },
      java: {
        method: 'brand().aiProduct',
        example:
          'package com.branddev.api.example;\n\nimport com.branddev.api.client.BrandDevClient;\nimport com.branddev.api.client.okhttp.BrandDevOkHttpClient;\nimport com.branddev.api.models.brand.BrandAiProductParams;\nimport com.branddev.api.models.brand.BrandAiProductResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BrandDevClient client = BrandDevOkHttpClient.fromEnv();\n\n        BrandAiProductParams params = BrandAiProductParams.builder()\n            .url("https://example.com")\n            .build();\n        BrandAiProductResponse response = client.brand().aiProduct(params);\n    }\n}',
      },
      ruby: {
        method: 'brand.ai_product',
        example:
          'require "brand_dev"\n\nbrand_dev = BrandDev::Client.new(api_key: "My API Key")\n\nresponse = brand_dev.brand.ai_product(url: "https://example.com")\n\nputs(response)',
      },
      http: {
        example:
          'curl https://api.brand.dev/v1/brand/ai/product \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $BRAND_DEV_API_KEY" \\\n    -d \'{\n          "url": "https://example.com"\n        }\'',
      },
    },
  },
  {
    name: 'web_scrape_html',
    endpoint: '/web/scrape/html',
    httpMethod: 'get',
    summary: 'Scrape HTML',
    description: 'Scrapes the given URL and returns the raw HTML content of the page.',
    stainlessPath: '(resource) brand > (method) web_scrape_html',
    qualified: 'client.brand.webScrapeHTML',
    params: [
      'url: string;',
      'includeFrames?: boolean;',
      'maxAgeMs?: number;',
      'parsePDF?: boolean;',
      'timeoutMS?: number;',
      'waitForMs?: number;',
    ],
    response: '{ html: string; success: true; url: string; }',
    markdown:
      "## web_scrape_html\n\n`client.brand.webScrapeHTML(url: string, includeFrames?: boolean, maxAgeMs?: number, parsePDF?: boolean, timeoutMS?: number, waitForMs?: number): { html: string; success: true; url: string; }`\n\n**get** `/web/scrape/html`\n\nScrapes the given URL and returns the raw HTML content of the page.\n\n### Parameters\n\n- `url: string`\n  Full URL to scrape (must include http:// or https:// protocol)\n\n- `includeFrames?: boolean`\n  When true, iframes are rendered inline into the returned HTML.\n\n- `maxAgeMs?: number`\n  Return a cached result if a prior scrape for the same parameters exists and is younger than this many milliseconds. Defaults to 1 day (86400000 ms) when omitted. Max is 30 days (2592000000 ms). Set to 0 to always scrape fresh.\n\n- `parsePDF?: boolean`\n  When true (default), PDF URLs are fetched and their text layer is extracted and returned wrapped in <html><pdf>…</pdf></html>. When false, PDF URLs are skipped and a 400 WEBSITE_ACCESS_ERROR is returned.\n\n- `timeoutMS?: number`\n  Optional timeout in milliseconds for the request. If the request takes longer than this value, it will be aborted with a 408 status code. Maximum allowed value is 300000ms (5 minutes).\n\n- `waitForMs?: number`\n  Optional browser wait time in milliseconds after initial page load. Min: 0. Max: 30000 (30 seconds). \n\n### Returns\n\n- `{ html: string; success: true; url: string; }`\n\n  - `html: string`\n  - `success: true`\n  - `url: string`\n\n### Example\n\n```typescript\nimport BrandDev from 'brand.dev';\n\nconst client = new BrandDev();\n\nconst response = await client.brand.webScrapeHTML({ url: 'https://example.com' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.brand.webScrapeHTML',
        example:
          "import BrandDev from 'brand.dev';\n\nconst client = new BrandDev({\n  apiKey: process.env['BRAND_DEV_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.brand.webScrapeHTML({ url: 'https://example.com' });\n\nconsole.log(response.html);",
      },
      python: {
        method: 'brand.web_scrape_html',
        example:
          'import os\nfrom brand.dev import BrandDev\n\nclient = BrandDev(\n    api_key=os.environ.get("BRAND_DEV_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.brand.web_scrape_html(\n    url="https://example.com",\n)\nprint(response.html)',
      },
      java: {
        method: 'brand().webScrapeHtml',
        example:
          'package com.branddev.api.example;\n\nimport com.branddev.api.client.BrandDevClient;\nimport com.branddev.api.client.okhttp.BrandDevOkHttpClient;\nimport com.branddev.api.models.brand.BrandWebScrapeHtmlParams;\nimport com.branddev.api.models.brand.BrandWebScrapeHtmlResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BrandDevClient client = BrandDevOkHttpClient.fromEnv();\n\n        BrandWebScrapeHtmlParams params = BrandWebScrapeHtmlParams.builder()\n            .url("https://example.com")\n            .build();\n        BrandWebScrapeHtmlResponse response = client.brand().webScrapeHtml(params);\n    }\n}',
      },
      ruby: {
        method: 'brand.web_scrape_html',
        example:
          'require "brand_dev"\n\nbrand_dev = BrandDev::Client.new(api_key: "My API Key")\n\nresponse = brand_dev.brand.web_scrape_html(url: "https://example.com")\n\nputs(response)',
      },
      http: {
        example:
          'curl https://api.brand.dev/v1/web/scrape/html \\\n    -H "Authorization: Bearer $BRAND_DEV_API_KEY"',
      },
    },
  },
  {
    name: 'web_scrape_md',
    endpoint: '/web/scrape/markdown',
    httpMethod: 'get',
    summary: 'Scrape Markdown',
    description: 'Scrapes the given URL into LLM usable Markdown.',
    stainlessPath: '(resource) brand > (method) web_scrape_md',
    qualified: 'client.brand.webScrapeMd',
    params: [
      'url: string;',
      'includeFrames?: boolean;',
      'includeImages?: boolean;',
      'includeLinks?: boolean;',
      'maxAgeMs?: number;',
      'parsePDF?: boolean;',
      'shortenBase64Images?: boolean;',
      'timeoutMS?: number;',
      'useMainContentOnly?: boolean;',
      'waitForMs?: number;',
    ],
    response: '{ markdown: string; success: true; url: string; }',
    markdown:
      "## web_scrape_md\n\n`client.brand.webScrapeMd(url: string, includeFrames?: boolean, includeImages?: boolean, includeLinks?: boolean, maxAgeMs?: number, parsePDF?: boolean, shortenBase64Images?: boolean, timeoutMS?: number, useMainContentOnly?: boolean, waitForMs?: number): { markdown: string; success: true; url: string; }`\n\n**get** `/web/scrape/markdown`\n\nScrapes the given URL into LLM usable Markdown.\n\n### Parameters\n\n- `url: string`\n  Full URL to scrape into LLM usable Markdown (must include http:// or https:// protocol)\n\n- `includeFrames?: boolean`\n  When true, the contents of iframes are rendered to Markdown.\n\n- `includeImages?: boolean`\n  Include image references in Markdown output\n\n- `includeLinks?: boolean`\n  Preserve hyperlinks in Markdown output\n\n- `maxAgeMs?: number`\n  Return a cached result if a prior scrape for the same parameters exists and is younger than this many milliseconds. Defaults to 1 day (86400000 ms) when omitted. Max is 30 days (2592000000 ms). Set to 0 to always scrape fresh.\n\n- `parsePDF?: boolean`\n  When true (default), PDF URLs are fetched and their text layer is extracted and converted to Markdown. When false, PDF URLs are skipped and a 400 WEBSITE_ACCESS_ERROR is returned.\n\n- `shortenBase64Images?: boolean`\n  Shorten base64-encoded image data in the Markdown output\n\n- `timeoutMS?: number`\n  Optional timeout in milliseconds for the request. If the request takes longer than this value, it will be aborted with a 408 status code. Maximum allowed value is 300000ms (5 minutes).\n\n- `useMainContentOnly?: boolean`\n  Extract only the main content of the page, excluding headers, footers, sidebars, and navigation\n\n- `waitForMs?: number`\n  Optional browser wait time in milliseconds after initial page load before converting the page to Markdown. Min: 0. Max: 30000 (30 seconds). \n\n### Returns\n\n- `{ markdown: string; success: true; url: string; }`\n\n  - `markdown: string`\n  - `success: true`\n  - `url: string`\n\n### Example\n\n```typescript\nimport BrandDev from 'brand.dev';\n\nconst client = new BrandDev();\n\nconst response = await client.brand.webScrapeMd({ url: 'https://example.com' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.brand.webScrapeMd',
        example:
          "import BrandDev from 'brand.dev';\n\nconst client = new BrandDev({\n  apiKey: process.env['BRAND_DEV_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.brand.webScrapeMd({ url: 'https://example.com' });\n\nconsole.log(response.markdown);",
      },
      python: {
        method: 'brand.web_scrape_md',
        example:
          'import os\nfrom brand.dev import BrandDev\n\nclient = BrandDev(\n    api_key=os.environ.get("BRAND_DEV_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.brand.web_scrape_md(\n    url="https://example.com",\n)\nprint(response.markdown)',
      },
      java: {
        method: 'brand().webScrapeMd',
        example:
          'package com.branddev.api.example;\n\nimport com.branddev.api.client.BrandDevClient;\nimport com.branddev.api.client.okhttp.BrandDevOkHttpClient;\nimport com.branddev.api.models.brand.BrandWebScrapeMdParams;\nimport com.branddev.api.models.brand.BrandWebScrapeMdResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BrandDevClient client = BrandDevOkHttpClient.fromEnv();\n\n        BrandWebScrapeMdParams params = BrandWebScrapeMdParams.builder()\n            .url("https://example.com")\n            .build();\n        BrandWebScrapeMdResponse response = client.brand().webScrapeMd(params);\n    }\n}',
      },
      ruby: {
        method: 'brand.web_scrape_md',
        example:
          'require "brand_dev"\n\nbrand_dev = BrandDev::Client.new(api_key: "My API Key")\n\nresponse = brand_dev.brand.web_scrape_md(url: "https://example.com")\n\nputs(response)',
      },
      http: {
        example:
          'curl https://api.brand.dev/v1/web/scrape/markdown \\\n    -H "Authorization: Bearer $BRAND_DEV_API_KEY"',
      },
    },
  },
  {
    name: 'web_scrape_images',
    endpoint: '/web/scrape/images',
    httpMethod: 'get',
    summary: 'Scrape Images',
    description:
      'Extract image assets from a web page, including standard URLs, inline SVGs, data URIs, responsive image sources, metadata, CSS backgrounds, video posters, and embeds. The base request costs 1 credit; enrichment costs 1 credit per returned image.',
    stainlessPath: '(resource) brand > (method) web_scrape_images',
    qualified: 'client.brand.webScrapeImages',
    params: [
      'url: string;',
      'enrichment?: { classification?: boolean; hostedUrl?: boolean; maxTimePerMs?: number; resolution?: boolean; };',
      'maxAgeMs?: number;',
      'timeoutMS?: number;',
      'waitForMs?: number;',
    ],
    response:
      "{ images: { alt: string; element: 'img' | 'svg' | 'link' | 'source' | 'video' | 'css' | 'object' | 'meta' | 'background'; src: string; type: 'url' | 'html' | 'base64'; enrichment?: { height?: number; mimetype?: string; type?: 'photography' | 'illustration' | 'logo' | 'wordmark' | 'icon' | 'pattern' | 'graphic' | 'other'; url?: string; width?: number; }; }[]; success: true; url: string; }",
    markdown:
      "## web_scrape_images\n\n`client.brand.webScrapeImages(url: string, enrichment?: { classification?: boolean; hostedUrl?: boolean; maxTimePerMs?: number; resolution?: boolean; }, maxAgeMs?: number, timeoutMS?: number, waitForMs?: number): { images: object[]; success: true; url: string; }`\n\n**get** `/web/scrape/images`\n\nExtract image assets from a web page, including standard URLs, inline SVGs, data URIs, responsive image sources, metadata, CSS backgrounds, video posters, and embeds. The base request costs 1 credit; enrichment costs 1 credit per returned image.\n\n### Parameters\n\n- `url: string`\n  Page URL to inspect. Must include http:// or https://.\n\n- `enrichment?: { classification?: boolean; hostedUrl?: boolean; maxTimePerMs?: number; resolution?: boolean; }`\n  Optional per-image processing, sent as deep-object query params such as enrichment[resolution]=true.\n  - `classification?: boolean`\n    Classify each image by visual asset type.\n  - `hostedUrl?: boolean`\n    Host materializable images on the Brand.dev CDN and return their URL and MIME type.\n  - `maxTimePerMs?: number`\n    Per-image enrichment timeout in milliseconds. Default: 30000. Maximum: 60000.\n  - `resolution?: boolean`\n    Measure image width and height when possible.\n\n- `maxAgeMs?: number`\n  Reuse a cached result this many milliseconds old or newer. Default: 86400000 (1 day). Set to 0 to bypass cache. Maximum: 2592000000 (30 days).\n\n- `timeoutMS?: number`\n  Optional timeout in milliseconds for the request. If the request takes longer than this value, it will be aborted with a 408 status code. Maximum allowed value is 300000ms (5 minutes).\n\n- `waitForMs?: number`\n  Optional browser wait time in milliseconds after initial page load before collecting images. Min: 0. Max: 30000 (30 seconds). \n\n### Returns\n\n- `{ images: { alt: string; element: 'img' | 'svg' | 'link' | 'source' | 'video' | 'css' | 'object' | 'meta' | 'background'; src: string; type: 'url' | 'html' | 'base64'; enrichment?: { height?: number; mimetype?: string; type?: 'photography' | 'illustration' | 'logo' | 'wordmark' | 'icon' | 'pattern' | 'graphic' | 'other'; url?: string; width?: number; }; }[]; success: true; url: string; }`\n\n  - `images: { alt: string; element: 'img' | 'svg' | 'link' | 'source' | 'video' | 'css' | 'object' | 'meta' | 'background'; src: string; type: 'url' | 'html' | 'base64'; enrichment?: { height?: number; mimetype?: string; type?: 'photography' | 'illustration' | 'logo' | 'wordmark' | 'icon' | 'pattern' | 'graphic' | 'other'; url?: string; width?: number; }; }[]`\n  - `success: true`\n  - `url: string`\n\n### Example\n\n```typescript\nimport BrandDev from 'brand.dev';\n\nconst client = new BrandDev();\n\nconst response = await client.brand.webScrapeImages({ url: 'https://example.com' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.brand.webScrapeImages',
        example:
          "import BrandDev from 'brand.dev';\n\nconst client = new BrandDev({\n  apiKey: process.env['BRAND_DEV_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.brand.webScrapeImages({ url: 'https://example.com' });\n\nconsole.log(response.images);",
      },
      python: {
        method: 'brand.web_scrape_images',
        example:
          'import os\nfrom brand.dev import BrandDev\n\nclient = BrandDev(\n    api_key=os.environ.get("BRAND_DEV_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.brand.web_scrape_images(\n    url="https://example.com",\n)\nprint(response.images)',
      },
      java: {
        method: 'brand().webScrapeImages',
        example:
          'package com.branddev.api.example;\n\nimport com.branddev.api.client.BrandDevClient;\nimport com.branddev.api.client.okhttp.BrandDevOkHttpClient;\nimport com.branddev.api.models.brand.BrandWebScrapeImagesParams;\nimport com.branddev.api.models.brand.BrandWebScrapeImagesResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BrandDevClient client = BrandDevOkHttpClient.fromEnv();\n\n        BrandWebScrapeImagesParams params = BrandWebScrapeImagesParams.builder()\n            .url("https://example.com")\n            .build();\n        BrandWebScrapeImagesResponse response = client.brand().webScrapeImages(params);\n    }\n}',
      },
      ruby: {
        method: 'brand.web_scrape_images',
        example:
          'require "brand_dev"\n\nbrand_dev = BrandDev::Client.new(api_key: "My API Key")\n\nresponse = brand_dev.brand.web_scrape_images(url: "https://example.com")\n\nputs(response)',
      },
      http: {
        example:
          'curl https://api.brand.dev/v1/web/scrape/images \\\n    -H "Authorization: Bearer $BRAND_DEV_API_KEY"',
      },
    },
  },
  {
    name: 'web_scrape_sitemap',
    endpoint: '/web/scrape/sitemap',
    httpMethod: 'get',
    summary: 'Crawl Sitemap',
    description: "Crawl an entire website's sitemap and return all discovered page URLs.",
    stainlessPath: '(resource) brand > (method) web_scrape_sitemap',
    qualified: 'client.brand.webScrapeSitemap',
    params: ['domain: string;', 'maxLinks?: number;', 'timeoutMS?: number;', 'urlRegex?: string;'],
    response:
      '{ domain: string; meta: { errors: number; sitemapsDiscovered: number; sitemapsFetched: number; sitemapsSkipped: number; }; success: true; urls: string[]; }',
    markdown:
      "## web_scrape_sitemap\n\n`client.brand.webScrapeSitemap(domain: string, maxLinks?: number, timeoutMS?: number, urlRegex?: string): { domain: string; meta: object; success: true; urls: string[]; }`\n\n**get** `/web/scrape/sitemap`\n\nCrawl an entire website's sitemap and return all discovered page URLs.\n\n### Parameters\n\n- `domain: string`\n  Domain to build a sitemap for\n\n- `maxLinks?: number`\n  Maximum number of links to return from the sitemap crawl. Defaults to 10,000. Minimum is 1, maximum is 100,000.\n\n- `timeoutMS?: number`\n  Optional timeout in milliseconds for the request. If the request takes longer than this value, it will be aborted with a 408 status code. Maximum allowed value is 300000ms (5 minutes).\n\n- `urlRegex?: string`\n  Optional RE2-compatible regex pattern. Only URLs matching this pattern are returned and counted against maxLinks.\n\n### Returns\n\n- `{ domain: string; meta: { errors: number; sitemapsDiscovered: number; sitemapsFetched: number; sitemapsSkipped: number; }; success: true; urls: string[]; }`\n\n  - `domain: string`\n  - `meta: { errors: number; sitemapsDiscovered: number; sitemapsFetched: number; sitemapsSkipped: number; }`\n  - `success: true`\n  - `urls: string[]`\n\n### Example\n\n```typescript\nimport BrandDev from 'brand.dev';\n\nconst client = new BrandDev();\n\nconst response = await client.brand.webScrapeSitemap({ domain: 'domain' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.brand.webScrapeSitemap',
        example:
          "import BrandDev from 'brand.dev';\n\nconst client = new BrandDev({\n  apiKey: process.env['BRAND_DEV_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.brand.webScrapeSitemap({ domain: 'domain' });\n\nconsole.log(response.domain);",
      },
      python: {
        method: 'brand.web_scrape_sitemap',
        example:
          'import os\nfrom brand.dev import BrandDev\n\nclient = BrandDev(\n    api_key=os.environ.get("BRAND_DEV_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.brand.web_scrape_sitemap(\n    domain="domain",\n)\nprint(response.domain)',
      },
      java: {
        method: 'brand().webScrapeSitemap',
        example:
          'package com.branddev.api.example;\n\nimport com.branddev.api.client.BrandDevClient;\nimport com.branddev.api.client.okhttp.BrandDevOkHttpClient;\nimport com.branddev.api.models.brand.BrandWebScrapeSitemapParams;\nimport com.branddev.api.models.brand.BrandWebScrapeSitemapResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BrandDevClient client = BrandDevOkHttpClient.fromEnv();\n\n        BrandWebScrapeSitemapParams params = BrandWebScrapeSitemapParams.builder()\n            .domain("domain")\n            .build();\n        BrandWebScrapeSitemapResponse response = client.brand().webScrapeSitemap(params);\n    }\n}',
      },
      ruby: {
        method: 'brand.web_scrape_sitemap',
        example:
          'require "brand_dev"\n\nbrand_dev = BrandDev::Client.new(api_key: "My API Key")\n\nresponse = brand_dev.brand.web_scrape_sitemap(domain: "domain")\n\nputs(response)',
      },
      http: {
        example:
          'curl https://api.brand.dev/v1/web/scrape/sitemap \\\n    -H "Authorization: Bearer $BRAND_DEV_API_KEY"',
      },
    },
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [
  {
    language: 'java',
    content:
      '# Brand Dev Java API Library\n\n<!-- x-release-please-start-version -->\n[![Maven Central](https://img.shields.io/maven-central/v/com.branddev.api/brand-dev-java)](https://central.sonatype.com/artifact/com.branddev.api/brand-dev-java/0.0.1)\n[![javadoc](https://javadoc.io/badge2/com.branddev.api/brand-dev-java/0.0.1/javadoc.svg)](https://javadoc.io/doc/com.branddev.api/brand-dev-java/0.0.1)\n<!-- x-release-please-end -->\n\nThe Brand Dev Java SDK provides convenient access to the [Brand Dev REST API](https://docs.context.dev/)   from applications written in Java.\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Brand Dev MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=brand.dev-mcp&config=eyJuYW1lIjoiYnJhbmQuZGV2LW1jcCIsInRyYW5zcG9ydCI6Imh0dHAiLCJ1cmwiOiJodHRwczovL2JyYW5kLWRldi5zdGxtY3AuY29tIiwiaGVhZGVycyI6eyJ4LWJyYW5kLWRldi1hcGkta2V5IjoiTXkgQVBJIEtleSJ9fQ)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22brand.dev-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbrand-dev.stlmcp.com%22%2C%22headers%22%3A%7B%22x-brand-dev-api-key%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n<!-- x-release-please-start-version -->\n\nThe REST API documentation can be found on [docs.context.dev](https://docs.context.dev/). Javadocs are available on [javadoc.io](https://javadoc.io/doc/com.branddev.api/brand-dev-java/0.0.1).\n\n<!-- x-release-please-end -->\n\n## Installation\n\n<!-- x-release-please-start-version -->\n\n### Gradle\n\n~~~kotlin\nimplementation("com.branddev.api:brand-dev-java:0.0.1")\n~~~\n\n### Maven\n\n~~~xml\n<dependency>\n  <groupId>com.branddev.api</groupId>\n  <artifactId>brand-dev-java</artifactId>\n  <version>0.0.1</version>\n</dependency>\n~~~\n\n<!-- x-release-please-end -->\n\n## Requirements\n\nThis library requires Java 8 or later.\n\n## Usage\n\n```java\nimport com.branddev.api.client.BrandDevClient;\nimport com.branddev.api.client.okhttp.BrandDevOkHttpClient;\nimport com.branddev.api.models.brand.BrandRetrieveParams;\nimport com.branddev.api.models.brand.BrandRetrieveResponse;\n\n// Configures using the `branddev.apiKey` and `branddev.baseUrl` system properties\n// Or configures using the `BRAND_DEV_API_KEY` and `BRAND_DEV_BASE_URL` environment variables\nBrandDevClient client = BrandDevOkHttpClient.fromEnv();\n\nBrandRetrieveParams params = BrandRetrieveParams.builder()\n    .domain("REPLACE_ME")\n    .build();\nBrandRetrieveResponse brand = client.brand().retrieve(params);\n```\n\n## Client configuration\n\nConfigure the client using system properties or environment variables:\n\n```java\nimport com.branddev.api.client.BrandDevClient;\nimport com.branddev.api.client.okhttp.BrandDevOkHttpClient;\n\n// Configures using the `branddev.apiKey` and `branddev.baseUrl` system properties\n// Or configures using the `BRAND_DEV_API_KEY` and `BRAND_DEV_BASE_URL` environment variables\nBrandDevClient client = BrandDevOkHttpClient.fromEnv();\n```\n\nOr manually:\n\n```java\nimport com.branddev.api.client.BrandDevClient;\nimport com.branddev.api.client.okhttp.BrandDevOkHttpClient;\n\nBrandDevClient client = BrandDevOkHttpClient.builder()\n    .apiKey("My API Key")\n    .build();\n```\n\nOr using a combination of the two approaches:\n\n```java\nimport com.branddev.api.client.BrandDevClient;\nimport com.branddev.api.client.okhttp.BrandDevOkHttpClient;\n\nBrandDevClient client = BrandDevOkHttpClient.builder()\n    // Configures using the `branddev.apiKey` and `branddev.baseUrl` system properties\n    // Or configures using the `BRAND_DEV_API_KEY` and `BRAND_DEV_BASE_URL` environment variables\n    .fromEnv()\n    .apiKey("My API Key")\n    .build();\n```\n\nSee this table for the available options:\n\n| Setter    | System property    | Environment variable | Required | Default value                |\n| --------- | ------------------ | -------------------- | -------- | ---------------------------- |\n| `apiKey`  | `branddev.apiKey`  | `BRAND_DEV_API_KEY`  | true     | -                            |\n| `baseUrl` | `branddev.baseUrl` | `BRAND_DEV_BASE_URL` | true     | `"https://api.brand.dev/v1"` |\n\nSystem properties take precedence over environment variables.\n\n> [!TIP]\n> Don\'t create more than one client in the same application. Each client has a connection pool and\n> thread pools, which are more efficient to share between requests.\n\n### Modifying configuration\n\nTo temporarily use a modified client configuration, while reusing the same connection and thread       pools, call `withOptions()` on any client or service:\n\n```java\nimport com.branddev.api.client.BrandDevClient;\n\nBrandDevClient clientWithOptions = client.withOptions(optionsBuilder -> {\n    optionsBuilder.baseUrl("https://example.com");\n    optionsBuilder.maxRetries(42);\n});\n```\n\nThe `withOptions()` method does not affect the original client or service.\n\n## Requests and responses\n\nTo send a request to the Brand Dev API, build an instance of some `Params` class and pass it to the     corresponding client method. When the response is received, it will be deserialized into an instance of     a Java class.\n\nFor example, `client.brand().retrieve(...)` should be called with an instance of `BrandRetrieveParams`, and it     will return an instance of `BrandRetrieveResponse`.\n\n## Immutability\n\nEach class in the SDK has an associated   [builder](https://blogs.oracle.com/javamagazine/post/exploring-joshua-blochs-builder-design-pattern-in-java)   or factory method for constructing it.\n\nEach class is [immutable](https://docs.oracle.com/javase/tutorial/essential/concurrency/immutable.html)   once constructed. If the class has an associated builder, then it has a `toBuilder()` method, which can   be used to convert it back to a builder for making a modified copy.\n\nBecause each class is immutable, builder modification will _never_ affect already built class instances.\n\n## Asynchronous execution\n\nThe default client is synchronous. To switch to asynchronous execution, call the `async()` method:\n\n```java\nimport com.branddev.api.client.BrandDevClient;\nimport com.branddev.api.client.okhttp.BrandDevOkHttpClient;\nimport com.branddev.api.models.brand.BrandRetrieveParams;\nimport com.branddev.api.models.brand.BrandRetrieveResponse;\nimport java.util.concurrent.CompletableFuture;\n\n// Configures using the `branddev.apiKey` and `branddev.baseUrl` system properties\n// Or configures using the `BRAND_DEV_API_KEY` and `BRAND_DEV_BASE_URL` environment variables\nBrandDevClient client = BrandDevOkHttpClient.fromEnv();\n\nBrandRetrieveParams params = BrandRetrieveParams.builder()\n    .domain("REPLACE_ME")\n    .build();\nCompletableFuture<BrandRetrieveResponse> brand = client.async().brand().retrieve(params);\n```\n\nOr create an asynchronous client from the beginning:\n\n```java\nimport com.branddev.api.client.BrandDevClientAsync;\nimport com.branddev.api.client.okhttp.BrandDevOkHttpClientAsync;\nimport com.branddev.api.models.brand.BrandRetrieveParams;\nimport com.branddev.api.models.brand.BrandRetrieveResponse;\nimport java.util.concurrent.CompletableFuture;\n\n// Configures using the `branddev.apiKey` and `branddev.baseUrl` system properties\n// Or configures using the `BRAND_DEV_API_KEY` and `BRAND_DEV_BASE_URL` environment variables\nBrandDevClientAsync client = BrandDevOkHttpClientAsync.fromEnv();\n\nBrandRetrieveParams params = BrandRetrieveParams.builder()\n    .domain("REPLACE_ME")\n    .build();\nCompletableFuture<BrandRetrieveResponse> brand = client.brand().retrieve(params);\n```\n\nThe asynchronous client supports the same options as the synchronous one, except most methods return `CompletableFuture`s.\n\n\n\n\n\n\n\n## Raw responses\n\nThe SDK defines methods that deserialize responses into instances of Java classes.       However, these methods don\'t provide access to the response headers, status code, or the raw response       body.\n\nTo access this data, prefix any HTTP method call on a client or service with `withRawResponse()`:\n\n```java\nimport com.branddev.api.core.http.Headers;\nimport com.branddev.api.core.http.HttpResponseFor;\nimport com.branddev.api.models.brand.BrandRetrieveParams;\nimport com.branddev.api.models.brand.BrandRetrieveResponse;\n\nBrandRetrieveParams params = BrandRetrieveParams.builder()\n    .domain("REPLACE_ME")\n    .build();\nHttpResponseFor<BrandRetrieveResponse> brand = client.brand().withRawResponse().retrieve(params);\n\nint statusCode = brand.statusCode();\nHeaders headers = brand.headers();\n```\n\nYou can still deserialize the response into an instance of a Java class if needed:\n\n```java\nimport com.branddev.api.models.brand.BrandRetrieveResponse;\n\nBrandRetrieveResponse parsedBrand = brand.parse();\n```\n\n## Error handling\n\nThe SDK throws custom unchecked exception types:\n\n- [`BrandDevServiceException`](brand-dev-java-core/src/main/kotlin/com/branddev/api/errors/BrandDevServiceException.kt): Base class for HTTP errors. See this table for which exception       subclass is thrown for each HTTP status code:\n\n  | Status | Exception                                          |\n  | ------ | -------------------------------------------------- |\n  | 400    | [`BadRequestException`](brand-dev-java-core/src/main/kotlin/com/branddev/api/errors/BadRequestException.kt)           |\n  | 401    | [`UnauthorizedException`](brand-dev-java-core/src/main/kotlin/com/branddev/api/errors/UnauthorizedException.kt)         |\n  | 403    | [`PermissionDeniedException`](brand-dev-java-core/src/main/kotlin/com/branddev/api/errors/PermissionDeniedException.kt)     |\n  | 404    | [`NotFoundException`](brand-dev-java-core/src/main/kotlin/com/branddev/api/errors/NotFoundException.kt)             |\n  | 422    | [`UnprocessableEntityException`](brand-dev-java-core/src/main/kotlin/com/branddev/api/errors/UnprocessableEntityException.kt)  |\n  | 429    | [`RateLimitException`](brand-dev-java-core/src/main/kotlin/com/branddev/api/errors/RateLimitException.kt)            |\n  | 5xx    | [`InternalServerException`](brand-dev-java-core/src/main/kotlin/com/branddev/api/errors/InternalServerException.kt)       |\n  | others | [`UnexpectedStatusCodeException`](brand-dev-java-core/src/main/kotlin/com/branddev/api/errors/UnexpectedStatusCodeException.kt) |\n\n- [`BrandDevIoException`](brand-dev-java-core/src/main/kotlin/com/branddev/api/errors/BrandDevIoException.kt): I/O networking errors.\n\n- [`BrandDevRetryableException`](brand-dev-java-core/src/main/kotlin/com/branddev/api/errors/BrandDevRetryableException.kt): Generic error indicating a failure that could be retried by the client.\n\n- [`BrandDevInvalidDataException`](brand-dev-java-core/src/main/kotlin/com/branddev/api/errors/BrandDevInvalidDataException.kt): Failure to interpret successfully parsed data. For example,       when accessing a property that\'s supposed to be required, but the API unexpectedly omitted it from the       response.\n\n- [`BrandDevException`](brand-dev-java-core/src/main/kotlin/com/branddev/api/errors/BrandDevException.kt): Base class for all exceptions. Most errors will result in one of the       previously mentioned ones, but completely generic errors may be thrown using the base class.\n\n\n\n## Logging\n\nEnable logging by setting the `BRAND_DEV_LOG` environment variable to   `info`:\n\n```sh\nexport BRAND_DEV_LOG=info\n```\n\nOr to `debug` for more verbose logging:\n\n```sh\nexport BRAND_DEV_LOG=debug\n```\n\nOr configure the client manually using the `logLevel` method:\n\n```java\nimport com.branddev.api.client.BrandDevClient;\nimport com.branddev.api.client.okhttp.BrandDevOkHttpClient;\nimport com.branddev.api.core.LogLevel;\n\nBrandDevClient client = BrandDevOkHttpClient.builder()\n    .fromEnv()\n    .logLevel(LogLevel.INFO)\n    .build();\n```\n\n## ProGuard and R8\n\nAlthough the SDK uses reflection, it is still usable with     [ProGuard](https://github.com/Guardsquare/proguard) and     [R8](https://developer.android.com/topic/performance/app-optimization/enable-app-optimization) because     `brand-dev-java-core` is published with a     [configuration file](brand-dev-java-core/src/main/resources/META-INF/proguard/brand-dev-java-core.pro) containing     [keep rules](https://www.guardsquare.com/manual/configuration/usage).\n\nProGuard and R8 should automatically detect and use the published rules, but you can also manually copy     the keep rules if necessary.\n\n\n\n\n\n## Jackson\n\nThe SDK depends on [Jackson](https://github.com/FasterXML/jackson) for JSON     serialization/deserialization. It is compatible with version 2.13.4 or higher,     but depends on version 2.18.2 by default.\n\nThe SDK throws an exception if it detects an incompatible Jackson version at runtime (e.g. if the     default version was overridden in your Maven or Gradle config).\n\nIf the SDK threw an exception, but you\'re _certain_ the version is compatible, then disable the version     check using the `checkJacksonVersionCompatibility` on [`BrandDevOkHttpClient`](brand-dev-java-client-okhttp/src/main/kotlin/com/branddev/api/client/okhttp/BrandDevOkHttpClient.kt) or     [`BrandDevOkHttpClientAsync`](brand-dev-java-client-okhttp/src/main/kotlin/com/branddev/api/client/okhttp/BrandDevOkHttpClientAsync.kt).\n\n> [!CAUTION]\n> We make no guarantee that the SDK works correctly when the Jackson version check is disabled.\n\nAlso note that there are bugs in older Jackson versions that can affect the SDK. We don\'t work around all     Jackson bugs ([example](https://github.com/FasterXML/jackson-databind/issues/3240)) and expect users to     upgrade Jackson for those instead.\n\n## Network options\n\n### Retries\n\nThe SDK automatically retries 2 times by default, with a short exponential backoff between requests.\n\nOnly the following error types are retried:\n- Connection errors (for example, due to a network connectivity problem)\n- 408 Request Timeout\n- 409 Conflict\n- 429 Rate Limit\n- 5xx Internal\n\nThe API may also explicitly instruct the SDK to retry or not retry a request.\n\nTo set a custom number of retries, configure the client using the `maxRetries` method:\n\n```java\nimport com.branddev.api.client.BrandDevClient;\nimport com.branddev.api.client.okhttp.BrandDevOkHttpClient;\n\nBrandDevClient client = BrandDevOkHttpClient.builder()\n    .fromEnv()\n    .maxRetries(4)\n    .build();\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default.\n\nTo set a custom timeout, configure the method call using the `timeout` method:\n\n```java\nimport com.branddev.api.models.brand.BrandRetrieveResponse;\n\nBrandRetrieveResponse brand = client.brand().retrieve(\n  params, RequestOptions.builder().timeout(Duration.ofSeconds(30)).build()\n);\n```\n\nOr configure the default for all method calls at the client level:\n\n```java\nimport com.branddev.api.client.BrandDevClient;\nimport com.branddev.api.client.okhttp.BrandDevOkHttpClient;\nimport java.time.Duration;\n\nBrandDevClient client = BrandDevOkHttpClient.builder()\n    .fromEnv()\n    .timeout(Duration.ofSeconds(30))\n    .build();\n```\n\n### Proxies\n\nTo route requests through a proxy, configure the client using the `proxy` method:\n\n```java\nimport com.branddev.api.client.BrandDevClient;\nimport com.branddev.api.client.okhttp.BrandDevOkHttpClient;\nimport java.net.InetSocketAddress;\nimport java.net.Proxy;\n\nBrandDevClient client = BrandDevOkHttpClient.builder()\n    .fromEnv()\n    .proxy(new Proxy(\n      Proxy.Type.HTTP, new InetSocketAddress(\n        "https://example.com", 8080\n      )\n    ))\n    .build();\n```\n\nIf the proxy responds with `407 Proxy Authentication Required`, supply credentials by also   configuring `proxyAuthenticator`:\n\n```java\nimport com.branddev.api.client.BrandDevClient;\nimport com.branddev.api.client.okhttp.BrandDevOkHttpClient;\nimport com.branddev.api.core.http.ProxyAuthenticator;\n\nBrandDevClient client = BrandDevOkHttpClient.builder()\n    .fromEnv()\n    .proxy(...)\n    // Or a custom implementation of `ProxyAuthenticator`.\n    .proxyAuthenticator(ProxyAuthenticator.basic("username", "password"))\n    .build();\n```\n\n### Connection pooling\n\nTo customize the underlying OkHttp connection pool, configure the client using the   `maxIdleConnections` and `keepAliveDuration` methods:\n\n```java\nimport com.branddev.api.client.BrandDevClient;\nimport com.branddev.api.client.okhttp.BrandDevOkHttpClient;\nimport java.time.Duration;\n\nBrandDevClient client = BrandDevOkHttpClient.builder()\n    .fromEnv()\n    // If `maxIdleConnections` is set, then `keepAliveDuration` must be set, and vice versa.\n    .maxIdleConnections(10)\n    .keepAliveDuration(Duration.ofMinutes(2))\n    .build();\n```\n\nIf both options are unset, OkHttp\'s default connection pool settings are used.\n\n### HTTPS\n\n> [!NOTE]\n> Most applications should not call these methods, and instead use the system defaults. The defaults include\n> special optimizations that can be lost if the implementations are modified.\n\nTo configure how HTTPS connections are secured, configure the client using the `sslSocketFactory`,   `trustManager`, and `hostnameVerifier` methods:\n\n```java\nimport com.branddev.api.client.BrandDevClient;\nimport com.branddev.api.client.okhttp.BrandDevOkHttpClient;\n\nBrandDevClient client = BrandDevOkHttpClient.builder()\n    .fromEnv()\n    // If `sslSocketFactory` is set, then `trustManager` must be set, and vice versa.\n    .sslSocketFactory(yourSSLSocketFactory)\n    .trustManager(yourTrustManager)\n    .hostnameVerifier(yourHostnameVerifier)\n    .build();\n```\n\n\n\n### Custom HTTP client\n\nThe SDK consists of three artifacts:\n- `brand-dev-java-core`\n  - Contains core SDK logic\n  - Does not depend on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`BrandDevClient`](brand-dev-java-core/src/main/kotlin/com/branddev/api/client/BrandDevClient.kt), [`BrandDevClientAsync`](brand-dev-java-core/src/main/kotlin/com/branddev/api/client/BrandDevClientAsync.kt),             [`BrandDevClientImpl`](brand-dev-java-core/src/main/kotlin/com/branddev/api/client/BrandDevClientImpl.kt), and [`BrandDevClientAsyncImpl`](brand-dev-java-core/src/main/kotlin/com/branddev/api/client/BrandDevClientAsyncImpl.kt), all of which can             work with any HTTP client\n- `brand-dev-java-client-okhttp`\n  - Depends on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`BrandDevOkHttpClient`](brand-dev-java-client-okhttp/src/main/kotlin/com/branddev/api/client/okhttp/BrandDevOkHttpClient.kt) and [`BrandDevOkHttpClientAsync`](brand-dev-java-client-okhttp/src/main/kotlin/com/branddev/api/client/okhttp/BrandDevOkHttpClientAsync.kt), which             provide a way to construct [`BrandDevClientImpl`](brand-dev-java-core/src/main/kotlin/com/branddev/api/client/BrandDevClientImpl.kt) and             [`BrandDevClientAsyncImpl`](brand-dev-java-core/src/main/kotlin/com/branddev/api/client/BrandDevClientAsyncImpl.kt), respectively, using OkHttp\n- `brand-dev-java`\n  - Depends on and exposes the APIs of both `brand-dev-java-core` and `brand-dev-java-client-okhttp`\n  - Does not have its own logic\n\nThis structure allows replacing the SDK\'s default HTTP client without pulling in unnecessary dependencies.\n\n#### Customized [`OkHttpClient`](https://square.github.io/okhttp/3.x/okhttp/okhttp3/OkHttpClient.html)\n\n> [!TIP]\n> Try the available [network options](#network-options) before replacing the default client.\n\nTo use a customized `OkHttpClient`:\n\n1. Replace your [`brand-dev-java` dependency](#installation) with `brand-dev-java-core`\n2. Copy `brand-dev-java-client-okhttp`\'s [`OkHttpClient`](brand-dev-java-client-okhttp/src/main/kotlin/com/branddev/api/client/okhttp/OkHttpClient.kt) class into your code and        customize it\n3. Construct [`BrandDevClientImpl`](brand-dev-java-core/src/main/kotlin/com/branddev/api/client/BrandDevClientImpl.kt) or [`BrandDevClientAsyncImpl`](brand-dev-java-core/src/main/kotlin/com/branddev/api/client/BrandDevClientAsyncImpl.kt), similarly to        [`BrandDevOkHttpClient`](brand-dev-java-client-okhttp/src/main/kotlin/com/branddev/api/client/okhttp/BrandDevOkHttpClient.kt) or [`BrandDevOkHttpClientAsync`](brand-dev-java-client-okhttp/src/main/kotlin/com/branddev/api/client/okhttp/BrandDevOkHttpClientAsync.kt), using your        customized client\n\n### Completely custom HTTP client\n\nTo use a completely custom HTTP client:\n\n1. Replace your [`brand-dev-java` dependency](#installation) with `brand-dev-java-core`\n2. Write a class that implements the [`HttpClient`](brand-dev-java-core/src/main/kotlin/com/branddev/api/core/http/HttpClient.kt) interface\n3. Construct [`BrandDevClientImpl`](brand-dev-java-core/src/main/kotlin/com/branddev/api/client/BrandDevClientImpl.kt) or [`BrandDevClientAsyncImpl`](brand-dev-java-core/src/main/kotlin/com/branddev/api/client/BrandDevClientAsyncImpl.kt), similarly to        [`BrandDevOkHttpClient`](brand-dev-java-client-okhttp/src/main/kotlin/com/branddev/api/client/okhttp/BrandDevOkHttpClient.kt) or [`BrandDevOkHttpClientAsync`](brand-dev-java-client-okhttp/src/main/kotlin/com/branddev/api/client/okhttp/BrandDevOkHttpClientAsync.kt), using your new        client class\n\n## Undocumented API functionality\n\nThe SDK is typed for convenient usage of the documented API. However, it also supports working with undocumented or not yet supported parts of the API.\n\n### Parameters\n\nTo set undocumented parameters, call the `putAdditionalHeader`, `putAdditionalQueryParam`, or       `putAdditionalBodyProperty` methods on any `Params` class:\n\n```java\nimport com.branddev.api.core.JsonValue;\nimport com.branddev.api.models.brand.BrandRetrieveParams;\n\nBrandRetrieveParams params = BrandRetrieveParams.builder()\n    .putAdditionalHeader("Secret-Header", "42")\n    .putAdditionalQueryParam("secret_query_param", "42")\n    .putAdditionalBodyProperty("secretProperty", JsonValue.from("42"))\n    .build();\n```\n\nThese can be accessed on the built object later using the `_additionalHeaders()`,       `_additionalQueryParams()`, and `_additionalBodyProperties()` methods.\n\nTo set undocumented parameters on _nested_ headers, query params, or body classes, call the         `putAdditionalProperty` method on the nested class:\n\n```java\nimport com.branddev.api.core.JsonValue;\nimport com.branddev.api.models.brand.BrandAiQueryParams;\n\nBrandAiQueryParams params = BrandAiQueryParams.builder()\n    .specificPages(BrandAiQueryParams.SpecificPages.builder()\n        .putAdditionalProperty("secretProperty", JsonValue.from("42"))\n        .build())\n    .build();\n```\n\nThese properties can be accessed on the nested built object later using the         `_additionalProperties()` method.\n\nTo set a documented parameter or property to an undocumented or not yet supported _value_, pass a       [`JsonValue`](brand-dev-java-core/src/main/kotlin/com/branddev/api/core/Values.kt) object to its setter:\n\n```java\nimport com.branddev.api.models.brand.BrandRetrieveParams;\n\nBrandRetrieveParams params = BrandRetrieveParams.builder()\n    .domain("REPLACE_ME")\n    .build();\n```\n\nThe most straightforward way to create a [`JsonValue`](brand-dev-java-core/src/main/kotlin/com/branddev/api/core/Values.kt) is using its       `from(...)` method:\n\n```java\nimport com.branddev.api.core.JsonValue;\nimport java.util.List;\nimport java.util.Map;\n\n// Create primitive JSON values\nJsonValue nullValue = JsonValue.from(null);\nJsonValue booleanValue = JsonValue.from(true);\nJsonValue numberValue = JsonValue.from(42);\nJsonValue stringValue = JsonValue.from("Hello World!");\n\n// Create a JSON array value equivalent to `["Hello", "World"]`\nJsonValue arrayValue = JsonValue.from(List.of(\n  "Hello", "World"\n));\n\n// Create a JSON object value equivalent to `{ "a": 1, "b": 2 }`\nJsonValue objectValue = JsonValue.from(Map.of(\n  "a", 1,\n  "b", 2\n));\n\n// Create an arbitrarily nested JSON equivalent to:\n// {\n//   "a": [1, 2],\n//   "b": [3, 4]\n// }\nJsonValue complexValue = JsonValue.from(Map.of(\n  "a", List.of(\n    1, 2\n  ),\n  "b", List.of(\n    3, 4\n  )\n));\n```\n\nNormally a `Builder` class\'s `build` method will throw         [`IllegalStateException`](https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalStateException.html)         if any required parameter or property is unset.\n\nTo forcibly omit a required parameter or property, pass [`JsonMissing`](brand-dev-java-core/src/main/kotlin/com/branddev/api/core/Values.kt):\n\n```java\nimport com.branddev.api.core.JsonMissing;\nimport com.branddev.api.models.brand.BrandRetrieveParams;\n\nBrandRetrieveParams params = BrandRetrieveParams.builder()\n    .domain(JsonMissing.of())\n    .build();\n```\n\n### Response properties\n\nTo access undocumented response properties, call the `_additionalProperties()` method:\n\n```java\nimport com.branddev.api.core.JsonValue;\nimport java.util.Map;\n\nMap<String, JsonValue> additionalProperties = client.brand().retrieve(params)._additionalProperties();\nJsonValue secretPropertyValue = additionalProperties.get("secretProperty");\n\nString result = secretPropertyValue.accept(new JsonValue.Visitor<>() {\n    @Override\n    public String visitNull() {\n        return "It\'s null!";\n    }\n\n    @Override\n    public String visitBoolean(boolean value) {\n        return "It\'s a boolean!";\n    }\n\n    @Override\n    public String visitNumber(Number value) {\n        return "It\'s a number!";\n    }\n\n    // Other methods include `visitMissing`, `visitString`, `visitArray`, and `visitObject`\n    // The default implementation of each unimplemented method delegates to `visitDefault`, which throws by default, but can also be overridden\n});\n```\n\nTo access a property\'s raw JSON value, which may be undocumented, call its `_` prefixed method:\n\n```java\nimport com.branddev.api.core.JsonField;\nimport java.util.Optional;\n\nJsonField<Object> field = client.brand().retrieve(params)._field();\n\nif (field.isMissing()) {\n  // The property is absent from the JSON response\n} else if (field.isNull()) {\n  // The property was set to literal null\n} else {\n  // Check if value was provided as a string\n  // Other methods include `asNumber()`, `asBoolean()`, etc.\n  Optional<String> jsonString = field.asString();\n\n  // Try to deserialize into a custom type\n  MyClass myObject = field.asUnknown().orElseThrow().convert(MyClass.class);\n}\n```\n\n### Response validation\n\nIn rare cases, the API may return a response that doesn\'t match the expected type. For example, the SDK     may expect a property to contain a `String`, but the API could return something else.\n\nBy default, the SDK will not throw an exception in this case. It will throw     [`BrandDevInvalidDataException`](brand-dev-java-core/src/main/kotlin/com/branddev/api/errors/BrandDevInvalidDataException.kt) only if you directly access the property.\n\nValidating the response is _not_ forwards compatible with new types from the API for existing fields.\n\nIf you would still prefer to check that the response is completely well-typed upfront, then either call     `validate()`:\n\n```java\nimport com.branddev.api.models.brand.BrandRetrieveResponse;\n\nBrandRetrieveResponse brand = client.brand().retrieve(params).validate();\n```\n\nOr configure the method call to validate the response using the `responseValidation` method:\n\n```java\nimport com.branddev.api.models.brand.BrandRetrieveResponse;\n\nBrandRetrieveResponse brand = client.brand().retrieve(\n  params, RequestOptions.builder().responseValidation(true).build()\n);\n```\n\nOr configure the default for all method calls at the client level:\n\n```java\nimport com.branddev.api.client.BrandDevClient;\nimport com.branddev.api.client.okhttp.BrandDevOkHttpClient;\n\nBrandDevClient client = BrandDevOkHttpClient.builder()\n    .fromEnv()\n    .responseValidation(true)\n    .build();\n```\n\n## FAQ\n\n### Why don\'t you use plain `enum` classes?\n\nJava `enum` classes are not trivially   [forwards compatible](https://www.stainless.com/blog/making-java-enums-forwards-compatible). Using them in   the SDK could cause runtime exceptions if the API is updated to respond with a new enum value.\n\n### Why do you represent fields using `JsonField<T>` instead of just plain `T`?\n\nUsing `JsonField<T>` enables a few features:\n\n- Allowing usage of [undocumented API functionality](#undocumented-api-functionality)\n- Lazily [validating the API response against the expected shape](#response-validation)\n- Representing absent vs explicitly null values\n\n### Why don\'t you use [`data` classes](https://kotlinlang.org/docs/data-classes.html)?\n\nIt is not [backwards compatible to add new fields to a data class](https://kotlinlang.org/docs/api-guidelines-backward-compatibility.html#avoid-using-data-classes-in-your-api)   and we don\'t want to introduce a breaking change every time we add a field to a class.\n\n### Why don\'t you use checked exceptions?\n\nChecked exceptions are widely considered a mistake in the Java programming language. In fact, they were   omitted from Kotlin for this reason.\n\nChecked exceptions:\n\n- Are verbose to handle\n- Encourage error handling at the wrong level of abstraction, where nothing can be done about the error\n- Are tedious to propagate due to the [function coloring problem](https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function)\n- Don\'t play well with lambdas (also due to the function coloring problem)\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/context-dot-dev/deprecated-brand-java-sdk/issues) with questions, bugs, or suggestions.\n',
  },
  {
    language: 'python',
    content:
      '# Brand Dev Python API library\n\n<!-- prettier-ignore -->\n[![PyPI version](https://img.shields.io/pypi/v/brand.dev.svg?label=pypi%20(stable))](https://pypi.org/project/brand.dev/)\n\nThe Brand Dev Python library provides convenient access to the Brand Dev REST API from any Python 3.9+\napplication. The library includes type definitions for all request params and response fields,\nand offers both synchronous and asynchronous clients powered by [httpx](https://github.com/encode/httpx).\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Brand Dev MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=brand.dev-mcp&config=eyJuYW1lIjoiYnJhbmQuZGV2LW1jcCIsInRyYW5zcG9ydCI6Imh0dHAiLCJ1cmwiOiJodHRwczovL2JyYW5kLWRldi5zdGxtY3AuY29tIiwiaGVhZGVycyI6eyJ4LWJyYW5kLWRldi1hcGkta2V5IjoiTXkgQVBJIEtleSJ9fQ)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22brand.dev-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbrand-dev.stlmcp.com%22%2C%22headers%22%3A%7B%22x-brand-dev-api-key%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Documentation\n\nThe REST API documentation can be found on [docs.context.dev](https://docs.context.dev/). The full API of this library can be found in [api.md](api.md).\n\n## Installation\n\n```sh\n# install from PyPI\npip install brand.dev\n```\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```python\nimport os\nfrom brand.dev import BrandDev\n\nclient = BrandDev(\n    api_key=os.environ.get("BRAND_DEV_API_KEY"),  # This is the default and can be omitted\n)\n\nbrand = client.brand.retrieve(\n    domain="REPLACE_ME",\n)\nprint(brand.brand)\n```\n\nWhile you can provide an `api_key` keyword argument,\nwe recommend using [python-dotenv](https://pypi.org/project/python-dotenv/)\nto add `BRAND_DEV_API_KEY="My API Key"` to your `.env` file\nso that your API Key is not stored in source control.\n\n## Async usage\n\nSimply import `AsyncBrandDev` instead of `BrandDev` and use `await` with each API call:\n\n```python\nimport os\nimport asyncio\nfrom brand.dev import AsyncBrandDev\n\nclient = AsyncBrandDev(\n    api_key=os.environ.get("BRAND_DEV_API_KEY"),  # This is the default and can be omitted\n)\n\nasync def main() -> None:\n  brand = await client.brand.retrieve(\n      domain="REPLACE_ME",\n  )\n  print(brand.brand)\n\nasyncio.run(main())\n```\n\nFunctionality between the synchronous and asynchronous clients is otherwise identical.\n\n### With aiohttp\n\nBy default, the async client uses `httpx` for HTTP requests. However, for improved concurrency performance you may also use `aiohttp` as the HTTP backend.\n\nYou can enable this by installing `aiohttp`:\n\n```sh\n# install from PyPI\npip install brand.dev[aiohttp]\n```\n\nThen you can enable it by instantiating the client with `http_client=DefaultAioHttpClient()`:\n\n```python\nimport os\nimport asyncio\nfrom brand.dev import DefaultAioHttpClient\nfrom brand.dev import AsyncBrandDev\n\nasync def main() -> None:\n  async with AsyncBrandDev(\n    api_key=os.environ.get("BRAND_DEV_API_KEY"),  # This is the default and can be omitted\n    http_client=DefaultAioHttpClient(),\n) as client:\n    brand = await client.brand.retrieve(\n        domain="REPLACE_ME",\n    )\n    print(brand.brand)\n\nasyncio.run(main())\n```\n\n\n\n## Using types\n\nNested request parameters are [TypedDicts](https://docs.python.org/3/library/typing.html#typing.TypedDict). Responses are [Pydantic models](https://docs.pydantic.dev) which also provide helper methods for things like:\n\n- Serializing back into JSON, `model.to_json()`\n- Converting to a dictionary, `model.to_dict()`\n\nTyped requests and responses provide autocomplete and documentation within your editor. If you would like to see type errors in VS Code to help catch bugs earlier, set `python.analysis.typeCheckingMode` to `basic`.\n\n\n\n## Nested params\n\nNested parameters are dictionaries, typed using `TypedDict`, for example:\n\n```python\nfrom brand.dev import BrandDev\n\nclient = BrandDev()\n\nresponse = client.brand.ai_query(\n    data_to_extract=[{\n        "datapoint_description": "datapoint_description",\n        "datapoint_example": "datapoint_example",\n        "datapoint_name": "datapoint_name",\n        "datapoint_type": "text",\n    }],\n    domain="domain",\n    specific_pages={},\n)\nprint(response.specific_pages)\n```\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API (for example, due to network connection problems or a timeout), a subclass of `brand.dev.APIConnectionError` is raised.\n\nWhen the API returns a non-success status code (that is, 4xx or 5xx\nresponse), a subclass of `brand.dev.APIStatusError` is raised, containing `status_code` and `response` properties.\n\nAll errors inherit from `brand.dev.APIError`.\n\n```python\nimport brand.dev\nfrom brand.dev import BrandDev\n\nclient = BrandDev()\n\ntry:\n    client.brand.retrieve(\n        domain="REPLACE_ME",\n    )\nexcept brand.dev.APIConnectionError as e:\n    print("The server could not be reached")\n    print(e.__cause__) # an underlying Exception, likely raised within httpx.\nexcept brand.dev.RateLimitError as e:\n    print("A 429 status code was received; we should back off a bit.")\nexcept brand.dev.APIStatusError as e:\n    print("Another non-200-range status code was received")\n    print(e.status_code)\n    print(e.response)\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors are automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors are all retried by default.\n\nYou can use the `max_retries` option to configure or disable retry settings:\n\n```python\nfrom brand.dev import BrandDev\n\n# Configure the default for all requests:\nclient = BrandDev(\n    # default is 2\n    max_retries=0,\n)\n\n# Or, configure per-request:\nclient.with_options(max_retries = 5).brand.retrieve(\n    domain="REPLACE_ME",\n)\n```\n\n### Timeouts\n\nBy default requests time out after 1 minute. You can configure this with a `timeout` option,\nwhich accepts a float or an [`httpx.Timeout`](https://www.python-httpx.org/advanced/timeouts/#fine-tuning-the-configuration) object:\n\n```python\nfrom brand.dev import BrandDev\n\n# Configure the default for all requests:\nclient = BrandDev(\n    # 20 seconds (default is 1 minute)\n    timeout=20.0,\n)\n\n# More granular control:\nclient = BrandDev(\n    timeout=httpx.Timeout(60.0, read=5.0, write=10.0, connect=2.0),\n)\n\n# Override per-request:\nclient.with_options(timeout = 5.0).brand.retrieve(\n    domain="REPLACE_ME",\n)\n```\n\nOn timeout, an `APITimeoutError` is thrown.\n\nNote that requests that time out are [retried twice by default](#retries).\n\n\n\n## Advanced\n\n### Logging\n\nWe use the standard library [`logging`](https://docs.python.org/3/library/logging.html) module.\n\nYou can enable logging by setting the environment variable `BRAND_DEV_LOG` to `info`.\n\n```shell\n$ export BRAND_DEV_LOG=info\n```\n\nOr to `debug` for more verbose logging.\n\n### How to tell whether `None` means `null` or missing\n\nIn an API response, a field may be explicitly `null`, or missing entirely; in either case, its value is `None` in this library. You can differentiate the two cases with `.model_fields_set`:\n\n```py\nif response.my_field is None:\n  if \'my_field\' not in response.model_fields_set:\n    print(\'Got json like {}, without a "my_field" key present at all.\')\n  else:\n    print(\'Got json like {"my_field": null}.\')\n```\n\n### Accessing raw response data (e.g. headers)\n\nThe "raw" Response object can be accessed by prefixing `.with_raw_response.` to any HTTP method call, e.g.,\n\n```py\nfrom brand.dev import BrandDev\n\nclient = BrandDev()\nresponse = client.brand.with_raw_response.retrieve(\n    domain="REPLACE_ME",\n)\nprint(response.headers.get(\'X-My-Header\'))\n\nbrand = response.parse()  # get the object that `brand.retrieve()` would have returned\nprint(brand.brand)\n```\n\nThese methods return an [`APIResponse`](https://github.com/context-dot-dev/deprecated-brand-python-sdk/tree/main/src/brand/dev/_response.py) object.\n\nThe async client returns an [`AsyncAPIResponse`](https://github.com/context-dot-dev/deprecated-brand-python-sdk/tree/main/src/brand/dev/_response.py) with the same structure, the only difference being `await`able methods for reading the response content.\n\n#### `.with_streaming_response`\n\nThe above interface eagerly reads the full response body when you make the request, which may not always be what you want.\n\nTo stream the response body, use `.with_streaming_response` instead, which requires a context manager and only reads the response body once you call `.read()`, `.text()`, `.json()`, `.iter_bytes()`, `.iter_text()`, `.iter_lines()` or `.parse()`. In the async client, these are async methods.\n\n```python\nwith client.brand.with_streaming_response.retrieve(\n    domain="REPLACE_ME",\n) as response :\n    print(response.headers.get(\'X-My-Header\'))\n\n    for line in response.iter_lines():\n      print(line)\n```\n\nThe context manager is required so that the response will reliably be closed.\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API.\n\nIf you need to access undocumented endpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can make requests using `client.get`, `client.post`, and other\nhttp verbs. Options on the client will be respected (such as retries) when making this request.\n\n```py\nimport httpx\n\nresponse = client.post(\n    "/foo",\n    cast_to=httpx.Response,\n    body={"my_param": True},\n)\n\nprint(response.headers.get("x-foo"))\n```\n\n#### Undocumented request params\n\nIf you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you can access the extra fields like `response.unknown_prop`. You\ncan also get all the extra fields on the Pydantic model as a dict with\n[`response.model_extra`](https://docs.pydantic.dev/latest/api/base_model/#pydantic.BaseModel.model_extra).\n\n### Configuring the HTTP client\n\nYou can directly override the [httpx client](https://www.python-httpx.org/api/#client) to customize it for your use case, including:\n\n- Support for [proxies](https://www.python-httpx.org/advanced/proxies/)\n- Custom [transports](https://www.python-httpx.org/advanced/transports/)\n- Additional [advanced](https://www.python-httpx.org/advanced/clients/) functionality\n\n```python\nimport httpx\nfrom brand.dev import BrandDev, DefaultHttpxClient\n\nclient = BrandDev(\n    # Or use the `BRAND_DEV_BASE_URL` env var\n    base_url="http://my.test.server.example.com:8083",\n    http_client=DefaultHttpxClient(proxy="http://my.test.proxy.example.com", transport=httpx.HTTPTransport(local_address="0.0.0.0")),\n)\n```\n\nYou can also customize the client on a per-request basis by using `with_options()`:\n\n```python\nclient.with_options(http_client=DefaultHttpxClient(...))\n```\n\n### Managing HTTP resources\n\nBy default the library closes underlying HTTP connections whenever the client is [garbage collected](https://docs.python.org/3/reference/datamodel.html#object.__del__). You can manually close the client using the `.close()` method if desired, or with a context manager that closes when exiting.\n\n```py\nfrom brand.dev import BrandDev\n\nwith BrandDev() as client:\n  # make requests here\n  ...\n\n# HTTP client is now closed\n```\n\n## Versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/context-dot-dev/deprecated-brand-python-sdk/issues) with questions, bugs, or suggestions.\n\n### Determining the installed version\n\nIf you\'ve upgraded to the latest version but aren\'t seeing any new features you were expecting then your python environment is likely still using an older version.\n\nYou can determine the version that is being used at runtime with:\n\n```py\nimport brand.dev\nprint(brand.dev.__version__)\n```\n\n## Requirements\n\nPython 3.9 or higher.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'ruby',
    content:
      '# Brand Dev Ruby API library\n\nThe Brand Dev Ruby library provides convenient access to the Brand Dev REST API from any Ruby 3.2.0+ application. It ships with comprehensive types & docstrings in Yard, RBS, and RBI – [see below](https://github.com/context-dot-dev/deprecated-brand-ruby-sdk#Sorbet) for usage with Sorbet. The standard library\'s `net/http` is used as the HTTP transport, with connection pooling via the `connection_pool` gem.\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Brand Dev MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=brand.dev-mcp&config=eyJuYW1lIjoiYnJhbmQuZGV2LW1jcCIsInRyYW5zcG9ydCI6Imh0dHAiLCJ1cmwiOiJodHRwczovL2JyYW5kLWRldi5zdGxtY3AuY29tIiwiaGVhZGVycyI6eyJ4LWJyYW5kLWRldi1hcGkta2V5IjoiTXkgQVBJIEtleSJ9fQ)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22brand.dev-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbrand-dev.stlmcp.com%22%2C%22headers%22%3A%7B%22x-brand-dev-api-key%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Documentation\n\nDocumentation for releases of this gem can be found [on RubyDoc](https://gemdocs.org/gems/brand.dev).\n\nThe REST API documentation can be found on [docs.context.dev](https://docs.context.dev/).\n\n## Installation\n\nTo use this gem, install via Bundler by adding the following to your application\'s `Gemfile`:\n\n<!-- x-release-please-start-version -->\n\n```ruby\ngem "brand.dev", "~> 0.0.1"\n```\n\n<!-- x-release-please-end -->\n\n## Usage\n\n```ruby\nrequire "bundler/setup"\nrequire "brand_dev"\n\nbrand_dev = BrandDev::Client.new(\n  api_key: ENV["BRAND_DEV_API_KEY"] # This is the default and can be omitted\n)\n\nbrand = brand_dev.brand.retrieve(domain: "REPLACE_ME")\n\nputs(brand.brand)\n```\n\n\n\n\n\n\n\n### Handling errors\n\nWhen the library is unable to connect to the API, or if the API returns a non-success status code (i.e., 4xx or 5xx response), a subclass of `BrandDev::Errors::APIError` will be thrown:\n\n```ruby\nbegin\n  brand = brand_dev.brand.retrieve(domain: "REPLACE_ME")\nrescue BrandDev::Errors::APIConnectionError => e\n  puts("The server could not be reached")\n  puts(e.cause)  # an underlying Exception, likely raised within `net/http`\nrescue BrandDev::Errors::RateLimitError => e\n  puts("A 429 status code was received; we should back off a bit.")\nrescue BrandDev::Errors::APIStatusError => e\n  puts("Another non-200-range status code was received")\n  puts(e.status)\nend\n```\n\nError codes are as follows:\n\n| Cause            | Error Type                 |\n| ---------------- | -------------------------- |\n| HTTP 400         | `BadRequestError`          |\n| HTTP 401         | `AuthenticationError`      |\n| HTTP 403         | `PermissionDeniedError`    |\n| HTTP 404         | `NotFoundError`            |\n| HTTP 409         | `ConflictError`            |\n| HTTP 422         | `UnprocessableEntityError` |\n| HTTP 429         | `RateLimitError`           |\n| HTTP >= 500      | `InternalServerError`      |\n| Other HTTP error | `APIStatusError`           |\n| Timeout          | `APITimeoutError`          |\n| Network error    | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\n\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict, 429 Rate Limit, >=500 Internal errors, and timeouts will all be retried by default.\n\nYou can use the `max_retries` option to configure or disable this:\n\n```ruby\n# Configure the default for all requests:\nbrand_dev = BrandDev::Client.new(\n  max_retries: 0 # default is 2\n)\n\n# Or, configure per-request:\nbrand_dev.brand.retrieve(domain: "REPLACE_ME", request_options: {max_retries: 5})\n```\n\n### Timeouts\n\nBy default, requests will time out after 60 seconds. You can use the timeout option to configure or disable this:\n\n```ruby\n# Configure the default for all requests:\nbrand_dev = BrandDev::Client.new(\n  timeout: nil # default is 60\n)\n\n# Or, configure per-request:\nbrand_dev.brand.retrieve(domain: "REPLACE_ME", request_options: {timeout: 5})\n```\n\nOn timeout, `BrandDev::Errors::APITimeoutError` is raised.\n\nNote that requests that time out are retried by default.\n\n## Advanced concepts\n\n### BaseModel\n\nAll parameter and response objects inherit from `BrandDev::Internal::Type::BaseModel`, which provides several conveniences, including:\n\n1. All fields, including unknown ones, are accessible with `obj[:prop]` syntax, and can be destructured with `obj => {prop: prop}` or pattern-matching syntax.\n\n2. Structural equivalence for equality; if two API calls return the same values, comparing the responses with == will return true.\n\n3. Both instances and the classes themselves can be pretty-printed.\n\n4. Helpers such as `#to_h`, `#deep_to_h`, `#to_json`, and `#to_yaml`.\n\n### Making custom or undocumented requests\n\n#### Undocumented properties\n\nYou can send undocumented parameters to any endpoint, and read undocumented response properties, like so:\n\nNote: the `extra_` parameters of the same name overrides the documented parameters.\n\n```ruby\nbrand =\n  brand_dev.brand.retrieve(\n    domain: "REPLACE_ME",\n    request_options: {\n      extra_query: {my_query_parameter: value},\n      extra_body: {my_body_parameter: value},\n      extra_headers: {"my-header": value}\n    }\n  )\n\nputs(brand[:my_undocumented_property])\n```\n\n#### Undocumented request params\n\nIf you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` under the `request_options:` parameter when making a request, as seen in the examples above.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints while retaining the benefit of auth, retries, and so on, you can make requests using `client.request`, like so:\n\n```ruby\nresponse = client.request(\n  method: :post,\n  path: \'/undocumented/endpoint\',\n  query: {"dog": "woof"},\n  headers: {"useful-header": "interesting-value"},\n  body: {"hello": "world"}\n)\n```\n\n### Concurrency & connection pooling\n\nThe `BrandDev::Client` instances are threadsafe, but are only are fork-safe when there are no in-flight HTTP requests.\n\nEach instance of `BrandDev::Client` has its own HTTP connection pool with a default size of 99. As such, we recommend instantiating the client once per application in most settings.\n\nWhen all available connections from the pool are checked out, requests wait for a new connection to become available, with queue time counting towards the request timeout.\n\nUnless otherwise specified, other classes in the SDK do not have locks protecting their underlying data structure.\n\n## Sorbet\n\nThis library provides comprehensive [RBI](https://sorbet.org/docs/rbi) definitions, and has no dependency on sorbet-runtime.\n\nYou can provide typesafe request parameters like so:\n\n```ruby\nbrand_dev.brand.retrieve(domain: "REPLACE_ME")\n```\n\nOr, equivalently:\n\n```ruby\n# Hashes work, but are not typesafe:\nbrand_dev.brand.retrieve(domain: "REPLACE_ME")\n\n# You can also splat a full Params class:\nparams = BrandDev::BrandRetrieveParams.new(domain: "REPLACE_ME")\nbrand_dev.brand.retrieve(**params)\n```\n\n### Enums\n\nSince this library does not depend on `sorbet-runtime`, it cannot provide [`T::Enum`](https://sorbet.org/docs/tenum) instances. Instead, we provide "tagged symbols" instead, which is always a primitive at runtime:\n\n```ruby\n# :afrikaans\nputs(BrandDev::BrandRetrieveParams::ForceLanguage::AFRIKAANS)\n\n# Revealed type: `T.all(BrandDev::BrandRetrieveParams::ForceLanguage, Symbol)`\nT.reveal_type(BrandDev::BrandRetrieveParams::ForceLanguage::AFRIKAANS)\n```\n\nEnum parameters have a "relaxed" type, so you can either pass in enum constants or their literal value:\n\n```ruby\n# Using the enum constants preserves the tagged type information:\nbrand_dev.brand.retrieve(\n  force_language: BrandDev::BrandRetrieveParams::ForceLanguage::AFRIKAANS,\n  # …\n)\n\n# Literal values are also permissible:\nbrand_dev.brand.retrieve(\n  force_language: :afrikaans,\n  # …\n)\n```\n\n## Versioning\n\nThis package follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions. As the library is in initial development and has a major version of `0`, APIs may change at any time.\n\nThis package considers improvements to the (non-runtime) `*.rbi` and `*.rbs` type definitions to be non-breaking changes.\n\n## Requirements\n\nRuby 3.2.0 or higher.\n\n## Contributing\n\nSee [the contributing documentation](https://github.com/context-dot-dev/deprecated-brand-ruby-sdk/tree/main/CONTRIBUTING.md).\n',
  },
  {
    language: 'typescript',
    content:
      "# Brand Dev TypeScript API Library\n\n[![NPM version](https://img.shields.io/npm/v/brand.dev.svg?label=npm%20(stable))](https://npmjs.org/package/brand.dev) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/brand.dev)\n\nThis library provides convenient access to the Brand Dev REST API from server-side TypeScript or JavaScript.\n\n\n\nThe REST API documentation can be found on [docs.context.dev](https://docs.context.dev/). The full API of this library can be found in [api.md](api.md).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Brand Dev MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=brand.dev-mcp&config=eyJuYW1lIjoiYnJhbmQuZGV2LW1jcCIsInRyYW5zcG9ydCI6Imh0dHAiLCJ1cmwiOiJodHRwczovL2JyYW5kLWRldi5zdGxtY3AuY29tIiwiaGVhZGVycyI6eyJ4LWJyYW5kLWRldi1hcGkta2V5IjoiTXkgQVBJIEtleSJ9fQ)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22brand.dev-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbrand-dev.stlmcp.com%22%2C%22headers%22%3A%7B%22x-brand-dev-api-key%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n```sh\nnpm install brand.dev\n```\n\n\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n<!-- prettier-ignore -->\n```js\nimport BrandDev from 'brand.dev';\n\nconst client = new BrandDev({\n  apiKey: process.env['BRAND_DEV_API_KEY'], // This is the default and can be omitted\n});\n\nconst brand = await client.brand.retrieve({ domain: 'REPLACE_ME' });\n\nconsole.log(brand.brand);\n```\n\n\n\n### Request & Response types\n\nThis library includes TypeScript definitions for all request params and response fields. You may import and use them like so:\n\n<!-- prettier-ignore -->\n```ts\nimport BrandDev from 'brand.dev';\n\nconst client = new BrandDev({\n  apiKey: process.env['BRAND_DEV_API_KEY'], // This is the default and can be omitted\n});\n\nconst params: BrandDev.BrandRetrieveParams = { domain: 'REPLACE_ME' };\nconst brand: BrandDev.BrandRetrieveResponse = await client.brand.retrieve(params);\n```\n\nDocumentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.\n\n\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API,\nor if the API returns a non-success status code (i.e., 4xx or 5xx response),\na subclass of `APIError` will be thrown:\n\n<!-- prettier-ignore -->\n```ts\nconst brand = await client.brand.retrieve({ domain: 'REPLACE_ME' }).catch(async (err) => {\n  if (err instanceof BrandDev.APIError) {\n    console.log(err.status); // 400\n    console.log(err.name); // BadRequestError\n    console.log(err.headers); // {server: 'nginx', ...}\n  } else {\n    throw err;\n  }\n});\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors will all be retried by default.\n\nYou can use the `maxRetries` option to configure or disable this:\n\n<!-- prettier-ignore -->\n```js\n// Configure the default for all requests:\nconst client = new BrandDev({\n  maxRetries: 0, // default is 2\n});\n\n// Or, configure per-request:\nawait client.brand.retrieve({ domain: 'REPLACE_ME' }, {\n  maxRetries: 5,\n});\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default. You can configure this with a `timeout` option:\n\n<!-- prettier-ignore -->\n```ts\n// Configure the default for all requests:\nconst client = new BrandDev({\n  timeout: 20 * 1000, // 20 seconds (default is 1 minute)\n});\n\n// Override per-request:\nawait client.brand.retrieve({ domain: 'REPLACE_ME' }, {\n  timeout: 5 * 1000,\n});\n```\n\nOn timeout, an `APIConnectionTimeoutError` is thrown.\n\nNote that requests which time out will be [retried twice by default](#retries).\n\n\n\n\n\n## Advanced Usage\n\n### Accessing raw Response data (e.g., headers)\n\nThe \"raw\" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.\nThis method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.\n\nYou can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.\nUnlike `.asResponse()` this method consumes the body, returning once it is parsed.\n\n<!-- prettier-ignore -->\n```ts\nconst client = new BrandDev();\n\nconst response = await client.brand.retrieve({ domain: 'REPLACE_ME' }).asResponse();\nconsole.log(response.headers.get('X-My-Header'));\nconsole.log(response.statusText); // access the underlying Response object\n\nconst { data: brand, response: raw } = await client.brand\n  .retrieve({ domain: 'REPLACE_ME' })\n  .withResponse();\nconsole.log(raw.headers.get('X-My-Header'));\nconsole.log(brand.brand);\n```\n\n### Logging\n\n> [!IMPORTANT]\n> All log messages are intended for debugging only. The format and content of log messages\n> may change between releases.\n\n#### Log levels\n\nThe log level can be configured in two ways:\n\n1. Via the `BRAND_DEV_LOG` environment variable\n2. Using the `logLevel` client option (overrides the environment variable if set)\n\n```ts\nimport BrandDev from 'brand.dev';\n\nconst client = new BrandDev({\n  logLevel: 'debug', // Show all log messages\n});\n```\n\nAvailable log levels, from most to least verbose:\n\n- `'debug'` - Show debug messages, info, warnings, and errors\n- `'info'` - Show info messages, warnings, and errors\n- `'warn'` - Show warnings and errors (default)\n- `'error'` - Show only errors\n- `'off'` - Disable all logging\n\nAt the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.\nSome authentication-related headers are redacted, but sensitive data in request and response bodies\nmay still be visible.\n\n#### Custom logger\n\nBy default, this library logs to `globalThis.console`. You can also provide a custom logger.\nMost logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.\n\nWhen providing a custom logger, the `logLevel` option still controls which messages are emitted, messages\nbelow the configured level will not be sent to your logger.\n\n```ts\nimport BrandDev from 'brand.dev';\nimport pino from 'pino';\n\nconst logger = pino();\n\nconst client = new BrandDev({\n  logger: logger.child({ name: 'BrandDev' }),\n  logLevel: 'debug', // Send all messages to pino, allowing it to filter\n});\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.\nOptions on the client, such as retries, will be respected when making these requests.\n\n```ts\nawait client.post('/some/path', {\n  body: { some_prop: 'foo' },\n  query: { some_query_arg: 'bar' },\n});\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented\nparameter. This library doesn't validate at runtime that the request matches the type, so any extra values you\nsend will be sent as-is.\n\n```ts\nclient.brand.retrieve({\n  // ...\n  // @ts-expect-error baz is not yet public\n  baz: 'undocumented option',\n});\n```\n\nFor requests with the `GET` verb, any extra params will be in the query, all other requests will send the\nextra param in the body.\n\nIf you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may access the response object with `// @ts-expect-error` on\nthe response object, or cast the response object to the requisite type. Like the request params, we do not\nvalidate or strip extra properties from the response from the API.\n\n### Customizing the fetch client\n\nBy default, this library expects a global `fetch` function is defined.\n\nIf you want to use a different `fetch` function, you can either polyfill the global:\n\n```ts\nimport fetch from 'my-fetch';\n\nglobalThis.fetch = fetch;\n```\n\nOr pass it to the client:\n\n```ts\nimport BrandDev from 'brand.dev';\nimport fetch from 'my-fetch';\n\nconst client = new BrandDev({ fetch });\n```\n\n### Fetch options\n\nIf you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)\n\n```ts\nimport BrandDev from 'brand.dev';\n\nconst client = new BrandDev({\n  fetchOptions: {\n    // `RequestInit` options\n  },\n});\n```\n\n#### Configuring proxies\n\nTo modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy\noptions to requests:\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg\" align=\"top\" width=\"18\" height=\"21\"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>\n\n```ts\nimport BrandDev from 'brand.dev';\nimport * as undici from 'undici';\n\nconst proxyAgent = new undici.ProxyAgent('http://localhost:8888');\nconst client = new BrandDev({\n  fetchOptions: {\n    dispatcher: proxyAgent,\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg\" align=\"top\" width=\"18\" height=\"21\"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>\n\n```ts\nimport BrandDev from 'brand.dev';\n\nconst client = new BrandDev({\n  fetchOptions: {\n    proxy: 'http://localhost:8888',\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg\" align=\"top\" width=\"18\" height=\"21\"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>\n\n```ts\nimport BrandDev from 'npm:brand.dev';\n\nconst httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });\nconst client = new BrandDev({\n  fetchOptions: {\n    client: httpClient,\n  },\n});\n```\n\n## Frequently Asked Questions\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/context-dot-dev/deprecated-brand-typescript-sdk/issues) with questions, bugs, or suggestions.\n\n## Requirements\n\nTypeScript >= 4.9 is supported.\n\nThe following runtimes are supported:\n\n- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)\n- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.\n- Deno v1.28.0 or higher.\n- Bun 1.0 or later.\n- Cloudflare Workers.\n- Vercel Edge Runtime.\n- Jest 28 or greater with the `\"node\"` environment (`\"jsdom\"` is not supported at this time).\n- Nitro v2.6 or greater.\n\nNote that React Native is not supported at this time.\n\nIf you are interested in other runtime environments, please open or upvote an issue on GitHub.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n",
  },
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}
