## Sticky Footer

This plugin is to make custom footers that have been added to Discourse forums stick to the
bottom of the 'page'. It defaults to targeting footers with an ID of `#sticky-footer`.
The target footer ID can be chaged in the plugin's settings.

### Installation

Follow the [Install a Plugin](https://meta.discourse.org/t/install-a-plugin/19157) howto, using
`git clone https://github.com/scossar/discourse-sticky-footer` as the plugin command.

Once you've installed it, review the settings under plugins in the admin section of your
forum.

### Use
Create a footer by adding markup to the `Footer` section of `Admin>Customize>CSS/HTML`.
Give your footer an id of `#sticky-footer`.