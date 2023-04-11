import ConsoleReporter from './reporters/ConsoleReporter.js';
import TapReporter from './reporters/TapReporter.js';
import PerfReporter from './reporters/PerfReporter.js';

export default {
  tap: TapReporter,
  perf: PerfReporter,
  console: ConsoleReporter
};
