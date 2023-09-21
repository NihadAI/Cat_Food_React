export class StringConstants {
	static MODAL_FIRST_TYPE = 'save';
	static MODAL_SECOND_TYPE = 'delete';

	static MODAL_SAVE_TEXT =
		'Once you save the changes, they will be permanent and cannot be undone. Are you sure you want to save?';
	static MODAL_DELETE_TEXT =
		"Once you delete this file, it won't be possible to undo this action. Are you sure you want to delete it?";

	static SAVE_BTN_NAME = 'Save';
	static DELETE_BTN_MAIN_NAME = 'Delete permanently';
	static DELETE_BTN_SECONDARY_NAME = 'Delete to Recycle Bin';
	static CANCEL_BTN_NAME = 'Cancel';

	static SAVE_BTN_ACTION = 'Saved';
	static DELETE_BTN_MAIN_ACTION = 'Deleted permanently';
	static DELETE_BTN_SECONDARY_ACTION = 'Deleted to Recycle Bin';

	static modalTitle = (name) => `Do you want to ${name} this file?`;
	static btnName = (name) => `Open "to ${name}" modal`;
}
