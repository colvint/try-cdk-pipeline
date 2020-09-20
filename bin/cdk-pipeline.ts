#!/usr/bin/env node
import 'source-map-support/register'
import { App } from '@aws-cdk/core'
import { CdkpipelinesDemoPipelineStack } from '../lib/pipeline'
import { AppConfig } from '../lib/config'

const app = new App()

new CdkpipelinesDemoPipelineStack(app, 'CdkpipelinesDemoPipelineStack', {
  env: AppConfig.AWS,
})

app.synth()
