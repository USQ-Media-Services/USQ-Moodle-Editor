var B64, postMessageCallback = {}, changesMade;



dbURL = (false ? 'http://localhost:8888/temp/Staff%20eLE%20%20Navigation%20Database.htm':'http://mystaffdesk.usq.edu.au/moodle2/mod/page/view.php?id=33529')

function master($scope){


	m = $scope;
	m.stylesheets = [];

	$('link').each(function () {
		if ($(this).attr('rel') === 'stylesheet') m.stylesheets.push($(this).attr('href'))
	})

	m.live = false;

	m.getOptions = function (classname, toolbars, menus, validElements) {
		return {
			body_class: classname,
			theme: "modern",
			convert_urls: 0,
			valid_elements : validElements || null,
			remove_script_host: 0,
			plugins: [
				"advlist autolink lists link image charmap print  hr anchor pagebreak",
				"searchreplace wordcount visualblocks visualchars code fullscreen",
				"insertdatetime nonbreaking save table contextmenu directionality",
				"template paste textcolor table noneditable"
			],
			content_css: m.stylesheets,
			noneditable_leave_contenteditable: true,
			toolbar1: toolbars || "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | forecolor backcolor",
			menubar: menus || "edit insert format table view",
			image_advtab: true,
			setup: function(editor) {
				editor.on('input', function(e) {
					changesMade = true;
				});
			}
		};
	}

	m.safeApply = function(fn) {
		var phase = this.$root.$$phase;
		if(phase === '$apply' || phase === '$digest') {
			if(fn && (typeof(fn) === 'function')) {
				fn();
			}
		}
		else {
			this.$apply(fn);
		}
	};

	m.placeholders = {

		titleIcon: 'http://mystaffdesk.usq.edu.au/moodle2/mod/equella/popup.php?cmid=35037',

		add: 'http://mystaffdesk.usq.edu.au/moodle2/mod/equella/popup.php?cmid=35009',

		remove: 'http://mystaffdesk.usq.edu.au/moodle2/mod/equella/popup.php?cmid=35032',

		edit: 'http://mystaffdesk.usq.edu.au/moodle2/mod/equella/popup.php?cmid=35036',

		floatingImage: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjMsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNjAwcHgiIGhlaWdodD0iMzU4LjIwOXB4IiB2aWV3Qm94PSItNTYuNSAtOTcuOTA1IDYwMCAzNTguMjA5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IC01Ni41IC05Ny45MDUgNjAwIDM1OC4yMDkiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGcgb3BhY2l0eT0iMC4zIj4NCgk8ZyBpZD0iTGF5ZXJfMV8xXyI+DQoJCTxyZWN0IHg9IjIuNSIgeT0iLTc0LjUyIiBmaWxsPSIjRkZGRkZGIiB3aWR0aD0iNDg0IiBoZWlnaHQ9IjI3MC44Ii8+DQoJCTxnPg0KCQkJPGc+DQoJCQkJPHBvbHlnb24gcG9pbnRzPSIzMDguODY4LDcuNjUxIDIzMS43NDcsMTA1Ljg4NyAxNzkuNTQxLDQzLjcxMSA4OS4zNjcsMTU1LjYyOSAzOTcuODU3LDE1NS42MjkgCQkJCSIvPg0KCQkJCTxlbGxpcHNlIGN4PSIxMzkuNTcxIiBjeT0iLTEwLjUwNSIgcng9IjMwLjEyMiIgcnk9IjMxLjU3MSIvPg0KCQkJPC9nPg0KCQk8L2c+DQoJPC9nPg0KCQ0KCQk8cmVjdCB4PSItNyIgeT0iLTg1LjMwMSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjI1IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHdpZHRoPSI1MDEiIGhlaWdodD0iMjg1Ii8+DQo8L2c+DQo8L3N2Zz4NCg==',

		video: 'http://mystaffdesk.usq.edu.au/moodle2/mod/equella/popup.php?cmid=34998',

		up: 'http://mystaffdesk.usq.edu.au/moodle2/mod/equella/popup.php?cmid=35010',

		down: 'http://mystaffdesk.usq.edu.au/moodle2/mod/equella/popup.php?cmid=35015'

	}

	m.errors = {
		"generic": "The page could not load one or all of it's required files.<br> Please try the link that brought you here again...<br><br> Sorry...",
		"no-page-specified": "You haven't specified a page to edit. <br> <br>Please try the link that brought you here again...",
		"not-a-content-page": "The page you have tried to load was not a content page, and you have chosen to load it.",
		"cannot-load-page": "The page you tried to load was was unavailable or offline.<br><br>Please try again later.",
		"navigation-m.database-down": "The naviagtion m.database was unavailable or offline.<br><br>Please try again later.",
		"cannot-save": "There was an error while saving."
	}

	m.get = function(url, func, async) {

		var moodle = $('#mystaffdesk')[0],
		lor = $('#studyreserveprd')[0],
		id = getEpoch() + '-' + Math.randomTo(100000,999999) + '-' + Math.randomTo(100000,999999)  + '-' + Math.randomTo(100000,999999),
		payload = JSONfn.stringify({id:id, url:url, async: async, func: function(prev) {
			//$.ajaxSetup({async: prev.async});
			$.get(prev.url, function (data) {
				parent.postMessage(JSONfn.stringify({id:prev.id, data:data}), "*");
				//$.ajaxSetup({async: true});
			}, 'text');

		}})

		if (url.indexOf('mystaffdesk') !== -1) {
			moodle.contentWindow.postMessage(payload, "*");
		}
		else if (url.indexOf('studyreserveprd') !== -1) {
			lor.contentWindow.postMessage(payload, "*");
		}
		else {
			//$.ajaxSetup({async: async});

			$.get(url, function (data) {
				func(data);
			}, 'text');

			//$.ajaxSetup({async: true});
		}

		postMessageCallback[id] = function (e) { func(e); };

	}

	m.post = function(url, data, func) {
		var moodle = $('#mystaffdesk')[0],
		lor = $('#studyreserveprd')[0],
		id = getEpoch() + '-' + Math.randomTo(100000,999999) + '-' + Math.randomTo(100000,999999)  + '-' + Math.randomTo(100000,999999),
		payload = JSONfn.stringify({id:id, url:url, data:data, func: function(prev) {
			$.ajax({
				xhr: function () {
					var req = $.ajaxSettings.xhr();
					if (req && req.upload) {
						req.upload.addEventListener('progress', function (event) {

							if (event.lengthComputable) {
								parent.postMessage(JSONfn.stringify({id:'progress', data:(event.loaded / event.total) * 100}), "*");
							}
						}, false);
					}
					return req;
				},
				type: "POST",
				url: prev.url,
				data: prev.data,
				contentType: "application/x-www-form-urlencoded;charset=UTF-8",
				error: function (a,b,c) {
				},
				success: function (d) {

					parent.postMessage(JSONfn.stringify({id:prev.id, data:d}), "*");
				}
			})
		}})

		if (url.indexOf('mystaffdesk') !== -1) {
			moodle.contentWindow.postMessage(payload, "*");
		}
		else if (url.indexOf('studyreserveprd') !== -1) {
			lor.contentWindow.postMessage(payload, "*");
		}
		postMessageCallback[id] = function (e) { func(e); };

	}

	m.database = (function ()  {
		var cache = {};
		return function(url, data) {

			var o = {
				thenFuncs:[],
				errorFuncs:[],
				then: function(a){
					if (typeof a === 'function') o.thenFuncs.push(a);
					return o;
				},
				error: function(a){
					if (typeof a === 'function') o.errorFuncs.push(a);
					return o;
				}
			};

			if (!!cache[url]) {
				for (var i = 0; i < o.thenFuncs.length; i++) {
					o.thenFuncs[i](cache[url].raw, cache[url].db);
				}
			}

			if (!$) {
				return false;
			}


			if(!data) {



				m.get(url, function(a) {

					var db = false;
					try{
						db = JSON.parse(B64.decode($('.generalbox  .no-overflow', a).text().trim().replace(/\n|\r/g,'')));
					}catch(e){}

					cache[url] = {
						raw: a,
						db: db
					}

					for (var i = 0; i < o.thenFuncs.length; i++) {
						o.thenFuncs[i](a, db);
					}
				})
			}

			else {

				m.database(url, null, true).then(function (raw, db) {

					var t = $('<form ' + raw.substr(raw.indexOf('form'))).serializeArray(), i, nd = {};
					for (i in t) {
						if (1) nd[t[i].name] = t[i].value;
					}
					delete nd.cancel;
					nd.submitbutton = 'Save and display'
					nd["page[text]"] = B64.encode(JSON.stringify(data));
					m.post(url, nd, function(a){

						for (var i = 0; i < o.thenFuncs.length; i++) {
							o.thenFuncs[i](a, db);
						}

					})
/*
					.error(function(a,b,c){
						for (var i = 0; i < o.errorFuncs.length; i++) {
							o.errorFuncs[i](a,b,c);
						}

					});
					*/
				}).error(function(a,b,c){
					for (var i = 0; i < o.errorFuncs.length; i++) {
						o.errorFuncs[i](a,b,c);
					}
				})


			}

		return o };

	})()

	m.moniter = function () {
		setTimeout(function () {
			$('[contenteditable="true"]').off('input').bind('input', function() {
				changesMade = true;
			});
		},200)

	}

	//Reads the page url and pageid
	try {
		m.url = B64.decode(decodeURIComponent(querystring((location.href).split('?')[1]).page));
		m.pageID = querystring(m.url.split('?')[1]).id;
	} catch(e) {
		m.url = 'false';
	}





/*Funcs*/
	m.addRow = function(type, section,data){
		data = data ||{};
		section.rows = (section.rows||[]);
		var lookup = {
			'anchor': {text:(data.text||getEpoch())},
			'text': {text:(data.text||'Enter text here...')},
			'text-with-image': {text:data.text||'Enter text here...', image:data.image||'', title:data.title||'', url:data.url||'', imageSize:(data.imageSize ? data.imageSize:'Small'), isVideo:data.isVideo, align:data.align||'Right', transcript:data.transcript, embed:data.embed},
			'video': (function(){
				var t = {videos:data.videos||[]};
				if (!data.videos) {
					t.videos.push({type:'video', rawYoutube:'', title:'', image:'', link:'', embed:''});
					t.videos.push({type:'video', rawYoutube:'', title:'', image:'', link:'', embed:''});
					t.videos.push({type:'video', rawYoutube:'', title:'', image:'', link:'', embed:''});
				}

				return t;
			})(),
			'featureImage': {image:data.image||'', title:data.title||'', url:data.url||'', imageSize:(data.imageSize ? data.imageSize:'Large'), isVideo:data.isVideo, transcript:data.transcript, embed:data.embed},
			'list': {title:data.title||'Placeholder title', text: data.text || '<ul><li>Placeholder item</li><li>Placeholder item</li><li>Placeholder item</li></ul>'},
			'ordered-list': {title:data.title||'Placeholder title', text: data.text || '<ol><li>Placeholder item</li><li>Placeholder item</li><li>Placeholder item</li></ol>'},
			'subButtons': {title:data.title||'Placeholder title', items: data.items||[{text:'Placeholder'},{text:'Placeholder'},{text:'Enter text here...'}]}
		},

		n = lookup[type];
		if(n){
			n.type = type
			section.rows.push(n);
		}

	}

	m.removeRow = function(section, index){
		(section.rows||[]).splice(index,1);
	}

	m.removeSection = function(index){
		(m.data.sections||[]).splice(index,1);
	}

	m.addSection = function(index){
		m.data.sections.push({
			title:'&lt;Placeholder title&gt;',
			showIcon:true,
			rows:[]
		})
	}

	m.getYoutubeObject = function(link) {
		if (!link || !link.match('youtube')) {

			return false;
		}
		var q = querystring(link.split('?')[1]),
		obj = {},
		id = q.v.replace(/"|%22|mqdefault.jpg|maxresdefault.jpg|\//g,'');

		obj.thumb = 'https://img.youtube.com/vi/'+id+'/mqdefault.jpg';
		obj.link = 'https://www.youtube.com/watch?v='+id;
		obj.embed = '<iframe src="//www.youtube.com/embed/'+id+'" frameborder="0" allowfullscreen webkitallowfullscreen  mozallowfullscreen></iframe>'
		return obj;
	}

	m.moveRow = function(section, index, newIndex){
		var a = section.rows[index],
		b = section.rows[newIndex];

		if (a && b) {
			section.rows[index] = {};
			section.rows[newIndex] = {};
			m.safeApply();
			section.rows[index] = b;
			section.rows[newIndex] = a;
		}
	}

	m.moveSection = function(index, newIndex){
		//m.data.sections.splice(newIndex, 0, m.data.sections.splice(index, 1));
		var a = m.data.sections[index],
		b = m.data.sections[newIndex];

		if (a && b) {
			m.data.sections[index] = [];
			m.data.sections[newIndex] = [];
			m.safeApply();
			m.data.sections[index] = b;
			m.data.sections[newIndex] = a;
		}
	}

	m.save = function(callback){

		m.safeApply(m.saving = true);
		var wrapper = $('.cpm_wrapper').clone(),
			saveUrl;
		wrapper
		.removeClass('ng-scope')
		.removeClass('ng-valid')
		.removeClass('angular-medium-editor')
		.removeClass('ng-dirty')
		.removeClass('ng-pristine');

		wrapper.find('.editorItem, .mce-tinymce').remove();

		wrapper.find('*')
			.removeAttr('contenteditable')
			.removeAttr('ng-src')
			.removeAttr('ng-href')
			.removeAttr('ng-click')
			.removeAttr('medium-editor')
			.removeAttr('ng-show')
			.removeAttr('ng-bind-html-unsafe')
			.removeAttr('ng-hide')
			.removeAttr('ng-model')
			.removeAttr('ng-hide-in-editor')
			.removeAttr('ng-class')
			.removeAttr('ng-include')
			.removeAttr('ng-style')
			.removeAttr('ng-repeat')
			.removeAttr('options')
			.removeAttr('data-medium-element')
			.removeAttr('data-placeholder');

			wrapper.find('*').not('.cpm_videoBlockImage,br,hr,img,obj,iframe').each(function(){
				var v = $(this);
				if (v.html().trim()==='') {
					v.remove();
				}
			})


		if(!isNaN(m.pageID)) {
			saveUrl = 'http://mystaffdesk.usq.edu.au/moodle2/course/modedit.php?return=0&sr=0&update=' + m.pageID;

			m.get(saveUrl, function(data){
				console.log($(data).find('form'))
				var d = $($(data).find('form')[0]).serializeArray();
				if (!!d) {
					d[24].value = '<div class="cpm_wrapper ng-cloak _live">'+wrapper.html()+'</div>';
					m.post(saveUrl, d, function(data){
						changesMade = false;
						m.safeApply(m.saving = false);
					});

				}
			})

		}





	}

	m.isLink = function(i) {
		var tag;
		if (!!i.link) {
			tag = 'a href="'+i.link+'"'
		}
		else {
			tag = 'span'
		}
		return '<'+tag+'>'+(i.title||'')+'</'+tag+'>'
	}

	m.base64 = function(a){
		return B64.encode(a||'');
	}

	m.getImageName = function (image) {
		return image.substr(image.lastIndexOf('/') + 1).split('.')[0]
	}


/*init stuff*/
	m.init = function () {
		m.inited = true;

		if (!!m.url&&m.url !== 'false') {
			m.database(m.url).then(function(raw,db){
				var confirmed, body
				if ($(raw).find('.cpm_wrapper').length || (confirmed = confirm('The provided page is not currently a content page; still continue?'))) {
					if (confirmed) {
						m.safeApply(m.data = {
							intro:'',
							introVideo:false,
							sections:[]
						});
					}
					else{




						body = $(raw).find('.cpm_wrapper');
						m.data = {
							intro: (body.find('.cpm_intro').last().html() || ' ').trim(),
							noIntro: body.find('.hideIntro').length === 0,
							titleIcon: body.find('.cpm_pageIcon').attr('src'),
							pageTitle: (body.find('.cpm_pageTitle').text()||' ').trim(),
							sections:[]
						}


						body.find('.cpm_section').each(function(){

							var el = $(this),
							d = {title:el.find('.cpm_sectionTitle').html(), rows:[]},
							eData = {};
							d.showIcon = !el.find('.ele_sectionIcon').hasClass('invisible');


							el.find('.cpm_row').each(function(){
								var v = $(this),
								type = v.removeClass('cpm_row').removeClass('relative').attr('class').replace('cpm_row_','').trim();



								switch (type) {
									case 'text':
										eData.type = type;
										eData.text = (v.find('.ele_text').last().length ? v.find('.ele_text').last().html():'').trim();
									break;

									case 'anchor':
										eData.type = type;
										eData.text = v.find('a').attr('id');
									break;

									case 'text-with-image':
										eData.type = type;
										var temp = v.clone();
										eData.text = '';
										temp.find('.cpm_imageFloatLeft,.cpm_imageFloatRight').remove();
										eData.text = (temp.find('div *').html() || ' ').trim();
										eData.text = eData.text || 'Enter text here...'
										eData.image = v.find('.cpm_floatingImage').attr('src');
										eData.align = (v.find('.cpm_imageFloatLeft').length > 0 ? 'Left' : 'Right');
										//var tVid = v.find('.cpm_videoWithTextBlock');
										if (!!v.find('*[usq-video-popup]').length && v.find('*[usq-video-popup]').attr('usq-video-popup') !== 'dW5kZWZpbmVk') {
											var data = B64.decode(v.find('*[usq-video-popup]').attr('usq-video-popup')),
											t;
											if(data.indexOf('<iframe') !== -1) t = m.getYoutubeObject('http:'+String($(data).attr('src')).replace('embed/','embed/?v='));
											else t = {};
											eData.title = v.find('.cpm_videoBlockTitle ').text().replace(v.find('a').text(),'').trim();
											var c = v.find('*[usq-video-popup]').attr('class'),
											testMedium = c.indexOf('Medium') !== -1,
											testLarge = c.indexOf('Large') !== -1;

											eData.imageSize = (testLarge ? 'Small' : (testMedium ? 'Medium' : 'Small'))
											eData.embed = t.embed;
											eData.image = t.thumb;
											eData.url = t.link || data;
											eData.transcript = v.find('.cpm_featureVideoTranscript > a').attr('href');
										}
									break;

									case 'featureImage':
										eData.type = type;
										var temp = v.clone();
										eData.text = '';
										temp.find('.cpm_floatingImage').remove();

										temp.find('p').each(function(){
											if(!!$(this).text()){
												eData.text += '<p>'+$(this).html()+'</p>';
											}
										});
										eData.text = eData.text || 'Enter text here...'
										eData.image = v.find('.cpm_floatingImage').attr('src');
										eData.align = (v.find('.cpm_imageFloatLeft').length > 0 ? 'Left' : 'Right');
										//var tVid = v.find('.cpm_videoWithTextBlock');
										if (!!v.find('*[usq-video-popup]').length && v.find('*[usq-video-popup]').attr('usq-video-popup') !== 'dW5kZWZpbmVk') {
											var data = B64.decode(v.find('*[usq-video-popup]').attr('usq-video-popup')),
											t;
											if(data.indexOf('<iframe') !== -1) t = m.getYoutubeObject('http:'+String($(data).attr('src')).replace('embed/','embed/?v='));
											else t = {};
											eData.title = v.find('.cpm_featureImageSubtitle ').text().replace(v.find('a').text(),'').trim();
											var c = v.find('[usq-video-popup]').attr('class'),
											testMedium = c.indexOf('Medium') !== -1,
											testLarge = c.indexOf('Large') !== -1;
											if(testLarge) {
												eData.imageSize = 'Large'
											}
											else if(testMedium) {
												eData.imageSize = 'Medium'
											}
											else {
												eData.imageSize = 'Small'
											}
											console.log(eData.imageSize);

											eData.embed = t.embed;
											eData.image = t.thumb || data;
											eData.url = t.link || data;
											eData.transcript = v.find('.cpm_featureVideoTranscript > a').attr('href');
										}

									break;

									case 'list':
									case 'ordered-list':
										eData.type = type;
										eData.title = v.find('.cpm_listTitle').text().trim();
										v.find('br:first-child').remove();
										v.find('.cpm_listTitle').remove();
										var e = (type === 'list' ? 'ul' : 'ol')
										eData.text = '<' + e + '>' + v.find('ul,ol').html() + '</' + e + '>';
										break;

									case 'video':

										eData.videos = [];
										v.find('.cpm_videoBlock').each(function () {
											if ( $(this).index() > 2) {
												return false;
											}
											var k = $(this),
												t = {},
												l,
												test;
											t.type = type;
											if (!k.hasClass('cpm_videoBlockInvisible')) {
												t.title = k.find('.cpm_videoBlockTitle').text().trim();
												test = (k.find('.cpm_videoBlockImage').css('background-image')||'').replace(/url\(|\)| /g,'').split(',')[1].replace(/"/g,'') || k.css('background-image').replace(/url\(|\)| /g,'').split(',')[1].replace(/"/g,'');
												if ((test || '').match('youtube')) {
													t.url = 'http://www.youtube.com/watch?v='+test.replace(/https:\/\/img.youtube.com\/vi\/|\/0\.jpg/g,'')
													l = m.getYoutubeObject(t.url);
													t.url = l.link;
													t.image = l.thumb;
													t.embed = l.embed;
													t.transcript = k.find('a').attr('href');
												}
												else {
													t.url = t.thumb = t.image = test
												}


											}
											eData.videos.push(t);
										});

									break;

								}




								m.addRow(type, d, eData);
							});
							m.data.sections.push(d)
						});
						m.safeApply();




					}

					//This loades the navigation m.database, which lets us populate headings.
					m.database(dbURL).then(function(raw,db){
						if(db) {


							var i, name, styles = $('style[set-icons-styles]');

							var getImage = function (data) {
								m.get(data.image.replace('https://','//'), function (a) {
									name = m.getImageName(data.image);
									styles.html(styles.html() + ' .' + name + " {background-image: url('data:image/svg+xml;base64," + B64.encode(a) + "')} ");
								}, 'text');
							};

							m.safeApply(m.data.headings = db);
							for(var i in m.data.headings) {

								getImage(m.data.headings[i]);
								if(m.data.headings[i].link === m.url) {
									m.data.index = parseFloat(i);
									m.page = m.data.headings[i];
									m.safeApply();
								}

								for (var k in m.data.headings[i].sub) {
									getImage(m.data.headings[i].sub[k]);
									if(m.data.headings[i].sub[k].link === m.url) {
										m.data.index = parseFloat(i);
										m.page = m.data.headings[i].sub[k];
										m.safeApply();
									}

								}

							}

							console.log(m.page);

						}
						else m.safeApply(m.error = 'navigation-m.database-down');
					}).error(function(){
						m.safeApply(m.error = 'navigation-m.database-down');
					});



				}
				else{
					m.safeApply(m.error = 'not-a-content-page');
				}
			}).error(function(){
				m.safeApply(m.error = 'cannot-load-page');
			});

		}
		else{
			m.safeApply(m.error = 'no-page-specified');
		}

		m.safeApply();
	}


	$(document).bind('click', function(){

		$('a').each(function () {

			if( $(this).text() === '×' ){
				$(this)
					.empty()
					.addClass('fa')
					.addClass('fa-times')
			}
		});

	})

}



$(window).bind('beforeunload', function() {
	if (changesMade) {
		return 'Changes have been made without saving.';
	}
});










window.addEventListener("message", function receiveMessage(event) {
	if (event.data) {
		var t = JSON.parse(event.data);

		if(!!t && typeof t.data === 'number' && t.id === 'progress') m.safeApply(m.$root.progress = t.data);

		if(!!t) {
			(postMessageCallback[t.id] || function () {})(t.data);
		}

		delete postMessageCallback[t.id];
	}

}, false);




angular.module('RMP', ['ui.bootstrap','angular-medium-editor', 'ui.tinymce'])

.controller('master', master)

.directive('usqTouch', function() {
	return function(scope, element, attrs) {
		element.bind('pointerdown', function(e) {
			try{
				if (!element.hasClass('disabled') && e.which === 1) {
					scope.$apply(attrs.usqTouch);
				}
			}catch(e){}
		});
	};
})

.directive('popoverToggle', function() {
	return function(scope, element, attrs) {
		var show = scope.$eval(attrs.popoverToggle);
		scope.$watch(attrs.popoverToggle, function(){
			show = scope.$eval(attrs.popoverToggle);
		})

		element.bind('mouseover', function(e) {
			m.safeApply(attrs.popoverToggle = !show)
		});
	};
})

.directive('ngBindHtmlUnsafe', function() {
	return function(scope, element, attr) {
		scope.$watch(attr.ngBindHtmlUnsafe, function (value) {
			element.html(scope.$eval(attr.ngBindHtmlUnsafe));
		})
	};
})

.directive('src', function() {
	return function(scope, element, attr) {
		element.bind('dragstart', function(e){
			e.preventDefault();
			e.stopPropagation();
			return false;
		})
	};
})

.directive('ngSrc', function() {
	return function(scope, element, attr) {
		element.bind('dragstart', function(e){
			e.preventDefault();
			e.stopPropagation();
			return false;
		})
	};
})

.directive('a', function() {
	return function(scope, element, attr) {
		element.bind('click', function(e){
			e.preventDefault();
			e.stopPropagation();
			return false;
		})
	};
})

.directive('killClick', function() {
	return function(scope, element, attr) {
		element.bind('click', function(e){
			e.preventDefault();
			e.stopPropagation();
			return false;
		})
	};
})

.directive('usqEnter', function() {
	return function(scope, element, attrs) {
		element.bind('keypress', function(e) {
			try{
				if (!element.hasClass('disabled') && e.which === 13) {
					scope.$apply(attrs.usqEnter);
				}
			}catch(e){}
		});
	};
});










/*EOF*/
