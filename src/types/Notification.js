// @flow
export type Notification = {
  id: ?string,
  title: ?string,
  message: string,
  type: string,
  errorCode: ?number,
  displayType: mixed,

  // additional properties for SnackBar
  linkText: ?string,
  linkTarget: ?string,
};
