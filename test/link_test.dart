import 'package:link_checker/link_checker.dart';
import 'package:test/test.dart';

void main() => test('dead links', () async {
      var links = <BadLink>[];

      // LinkedIn doesn't allow requests to their site.
      var linkedIn = RegExp(r'.*linkedin\.com.*');

      await for (BadLink link in getBadLinksInDirectory(
          blacklistedLinksRegexes: [
            linkedIn
          ],
          blacklistedFilePaths: [
            '.packages',
            'pubspec.lock'
          ],
          blacklistedDirectories: [
            BlacklistedDirectory('.dart_tool'),
            BlacklistedDirectory('/builds')
          ])) {
        links.add(link);
      }
      expect(links, isEmpty);
    }, timeout: Timeout.none);
