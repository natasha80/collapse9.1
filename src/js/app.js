/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
import Collapse from './Collapse';
import CallbackChat from './CallbackChat';
import Liker from './Liker';

const content = 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.';
const collapse = new Collapse('.collapse', content);
collapse.bindToDOM();

const callbackChat = new CallbackChat('.callback-chat');
callbackChat.bindToDOM();

const liker = new Liker('.liker');
liker.bindToDOM();