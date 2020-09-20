#!/usr/bin/env node
import 'source-map-support/register'
import { App } from '@aws-cdk/core'
import { CdkpipelinesDemoPipelineStack } from '../lib/pipeline'

const app = new App()

new CdkpipelinesDemoPipelineStack(app, 'CdkpipelinesDemoPipelineStack', {
  env: { account: '778104650769', region: 'us-east-1' },
})

app.synth()
