import { Reporter, TestCase, TestResult, TestStep, TestError, FullConfig } from '@playwright/test/reporter';

class CustomReporter implements Reporter {
    private startTime: number = 0;

    onBegin(config: FullConfig, suite: any) {
        this.startTime = Date.now();
        console.log('\n==================================');
        console.log('Starting Sonnet Digital Test Suite');
        console.log('==================================\n');
    }

    onTestBegin(test: TestCase) {
        console.log(`Starting test: ${test.title}`);
    }

    onTestEnd(test: TestCase, result: TestResult) {
        const status = result.status;
        const duration = result.duration / 1000; // Convert to seconds
        const icon = status === 'passed' ? '✅' : status === 'failed' ? '❌' : '⚠️';
        
        console.log(`${icon} ${test.title}`);
        console.log(`   Status: ${status}`);
        console.log(`   Duration: ${duration.toFixed(2)}s\n`);
    }

    onEnd(result: { status: string }) {
        const duration = (Date.now() - this.startTime) / 1000;
        console.log('==================================');
        console.log(`Test Suite Completed in ${duration.toFixed(2)}s`);
        console.log(`Status: ${result.status}`);
        console.log('==================================\n');
    }

    onStepBegin(test: TestCase, result: TestResult, step: TestStep) {
        if (step.category === 'test.step') {
            console.log(`   → ${step.title}`);
        }
    }

    onError(error: TestError) {
        console.log('\n❌ Error occurred:');
        console.log(error.message);
        console.log('==================================\n');
    }
}

export default CustomReporter;