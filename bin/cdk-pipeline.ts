#!/usr/bin/env node
import 'source-map-support/register'
import { App } from '@aws-cdk/core'
import { CdkpipelinesDemoPipelineStack } from '../lib/pipeline'
import { AppConfig } from '../lib/config'

const app = new App()

new CdkpipelinesDemoPipelineStack(app, 'CdkpipelinesDemoPipelineStack', {
  env: AppConfig.AWS,
})

// add your dev stacks here

// new StageOne(app, 'MyTemporaryDevStack', {
//   env: AppConfig.AWS,
// })

// and deploy to your isolated environment with:
// npx cdk synth
// npx cdk -a cdk.out/assembly-MyTemporaryDevStack deploy

app.synth()
