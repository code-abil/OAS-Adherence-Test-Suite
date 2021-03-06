/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @module log */
/**
 * @fileoverview Configurations of the custom loggers.
 */

const {createLogger, format, transports} = require('winston');
const {combine} = format;

/**
 * customLogger is a winston object which logs above 'info' level by default.
 * generateTestSuite() and validateApiEndpoints() in src/actions.js can change
 * the level to 'verbose'.
 * Logging Levels: [error, warn, info, http, verbose, debug, silly]
 * Highest Priority = 'error', Lowest Priority = 'silly'.
 */
const customLogger = createLogger({
  level: 'info',
  format: combine(
      format.colorize(),
      format.simple(),
      format.printf(function(info) {
        return `${info.message}`;
      }),
  ),
  transports: [new transports.Console()],
});

module.exports = {
  logger: customLogger,
};
