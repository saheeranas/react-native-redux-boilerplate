describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have a To Do screen as home screen', async () => {
    await expect(element(by.text('To Do'))).toBeVisible();
  });

  it('should show network screen after tap', async () => {
    await element(by.id('BottomTab.Network')).tap();
    await expect(element(by.text('NetworkExample'))).toBeVisible();
  });

  afterAll(async () => {
    await device.terminateApp();
  });
});
