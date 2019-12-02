import CMS from 'netlify-cms'

if (document.location.host.split(':')[0] !== 'localhost') {
    CMS.configure({'site_id': 'cms.netlify.com' });
} else {
    CMS.configure({'site_id': 'gridsome-netflify-cms.netlify.com' });
}