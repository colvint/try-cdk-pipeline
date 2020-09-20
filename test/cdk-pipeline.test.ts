import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import { SomeStack } from '../lib/stacks/some-stack';

test('Empty Stack', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new SomeStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(matchTemplate({
    "Resources": {}
  }, MatchStyle.EXACT))
});
