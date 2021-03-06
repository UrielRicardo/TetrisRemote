'use strict'


var socket
var SOCKET_SERVER_ADDR = '127.0.0.1'
var SOCKET_SERVER_PORT = '4567'
var callbacks = []


var BROADCAST = 'brodcast';
	
var FROM_PLAYER_TO_DEVICE = 'player_to_device';

var FROM_DEVICE_TO_PLAYER = 'device_to_player';

var BEGIN_FACEBOOK_ASSOCIATION = 'api.associate.facebook.start';

var ASSOCIATE_WITH_FACEBOOK = 'api.associate.facebook';

var BEGIN_CODE_ASSOCIATION = 'api.associate.code.start';

var ASSOCIATION_INITIATED_WITH_CODE = 'api.associate.code.started';

var ASSOCIATE_WITH_CODE = 'api.associate.code';

var ASSOCIATION_REFUSED = 'api.associate.refused';

var ASSOCIATED_WITH_TOKEN = 'api.associated.token';

var DISASSOCIATE = 'api.disassociate';

var PLAYING_AT_TIMECODE = 'api.playing.current_timecode';