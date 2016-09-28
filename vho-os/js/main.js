var accattr = [
['acc-num','Мат. счет','000001'],
['acc-name','Наименование','Пингвин'],
['acc-inv','Инвентарный номер',''],
['acc-type','Тип ТМЦ','ОС'],
['acc-vid','Вид использования','СКЛАД'],
['acc-group','Группа ТМЦ','ОС на складе'],
['acc-finacc','Финансовый счет','60415%'],
['acc-mol','МОЛ','Петров Иван Сидорович'],
['acc-nalgr','Налоговая группа',''],
['acc-spi','СПИ',''],
['acc-balst','Балансовая стоимость','45,000.00'],
['acc-amo-buh','Бухгалтерская амортизация',''],
['acc-amo-nal','Налоговая амортизация',''],
]
var acctable = $('<table />')

var tr1 = $('<tr />',{'id':'tr1'})
var tr2 = $('<tr />',{'id':'tr2'})

for (var i = 0; i < accattr.length; i++) {
	var attr = accattr[i]
		var td1 = $('<td />', {'class': 'acc-attr acc-attr-1','text':attr[1]})
		var td2 = $('<td />', {'class': 'acc-attr acc-attr-2','text':attr[2],'id':attr[0]})
	tr1.append(td1)
	tr2.append(td2)
};
acctable.attr('cellspacing','0px')
acctable.attr('cellpadding','5px')
acctable.append(tr1)
acctable.append(tr2)
$("#acc").append(acctable)

var glossarr = [
['ОС','Основное средство'],
['НВНОД','Недвижимость временно неиспользуемая в основной деятельности'],
['ДАПП','Долгосрочные активы предназначенные для продажи'],
['МОЛ','Материально ответственное лицо'],
['СПИ','Срок полезного использования'],
['ТМЦ','Товаро-материальные ценности (в данном случае обозначение продукта)'],
]
var gtable = $('<table />')
for (var i = 0; i < glossarr.length; i++) {
	var gattr = glossarr[i]
		var gtr = $('<tr />')
		var gtd1 = $('<td />', {'class': 'gtd1','text':gattr[0]})
		var gtd2 = $('<td />', {'class': 'gtd2','text':gattr[1]})
		gtr.append(gtd1).append(gtd2)
		gtable.append(gtr)
};
gtable.attr('cellspacing','0px')
gtable.attr('cellpadding','5px')
$("#glossary").append(gtable)

var docarr = [
['doc-prih','1 --- Документ на приход ОС, НВНОД'],
['doc-expl-os','2.1 - Ввод в эксплуатацию ОС'],
['doc-expl-vnod','2.2 - Ввод в эксплуатацию НВНОД'],
['doc-mod','3 --- Модернизация ОС, НВНОД'],
['doc-amo-buh','3.1 - Бухгалтерская амортизация (фильтр)'],
['doc-amo-nal','3.1 - Налоговая амортизация'],
['doc-pered-mol','3 --- Передача между МОЛ'],
['doc-pered-act','3 --- Передача между видами активов'],
['doc-pered-dapp','3.1 - Передача ОС-ДАПП'],
['doc-pereoc-os','3.1 - Переоценка ОС'],
['doc-pereoc-vnod','3.2 - Переоценка НВНОД'],
['doc-release','4 --- Продажа ОС, НВНОД, ДАПП'],
['doc-spisan','4 --- Списание ОС, НВНОД'],
]

for (var i = 0; i < docarr.length; i++) {	
	var docattr = docarr[i]
	var matdoc = $('<div />', {'class': 'doc-attr ','text':docattr[1],'id':docattr[0], 'click':function(){
		$(".doc-attr").css('background-color','Linen')
		console.log(this.id)
		$("#"+this.id+"").css('background-color','Burlywood')
		$("#comment").html("<b>"+$("#"+this.id+"").html()+":</b><br>").css('color','black')
		$(".acc-attr-2").css('color','black').css('background-color','white')
		var lightup1 = 'blue'
		var lightup2 = 'antiquewhite'
		var lighterr = 'crimson'
		if(this.id == 'doc-prih'){
			$("#acc-inv").html('')
			$("#acc-nalgr").html('')
			$("#acc-spi").html('')
			$("#acc-vid").html('СКЛАД')
			$("#acc-group").html('ОС на складе')
			$("#acc-mol").html('Петров Иван Сидорович')
			$("#acc-finacc").html('60415%')
			$("#acc-balst").html('45,000.00')
			$("#acc-amo-buh").html('')
			$("#comment").append('Сначала создают документ прихода на склад.<br>В результате формируетcя материальный счет с уникальным номером и реквизитами:<br>Вид использования СКЛАД<br>Группа ТМЦ: ОС на складе<br>Финансовый счет тянет с Группы ТМЦ<br>МОЛ: в зависимости от местонахождения<br>Балансовая стоимость')
		}
		if(this.id == 'doc-expl-os'){
			var vid = $("#acc-vid").html()
			if(vid != 'СКЛАД'){
				$("#comment").append('Только для средств с видом использования СКЛАД').css('color',lighterr)
			}
			else{
				$("#acc-inv").html('03ОС_604000001').css('color',lightup1).css('background-color',lightup2)
				$("#acc-nalgr").html('03').css('color',lightup1).css('background-color',lightup2)
				$("#acc-spi").html('37').css('color',lightup1).css('background-color',lightup2)
				$("#acc-vid").html('ЭКСПЛ').css('color',lightup1).css('background-color',lightup2)
				$("#acc-group").html('Основные средства ДО "7777"').css('color',lightup1).css('background-color',lightup2)
				$("#acc-mol").html('Иванова Анна Ивановна').css('color',lightup1).css('background-color',lightup2)
				$("#acc-finacc").html('60401****7777%').css('color',lightup1).css('background-color',lightup2)
				$("#comment").append('Средству присваивается инвентарный номер, вид использования меняется на ЭКСПЛ.<br>Средство помещается на указанную группу тмц, определяющую счет учета и материально ответственное лицо.<br>Присваивается группа амортизации, определяющая срок полезного использования для расчета данных по амортизации.')
			}
		}
		if(this.id == 'doc-expl-vnod'){
			var vid = $("#acc-vid").html()
			if(vid != 'СКЛАД'){
				$("#comment").append('Только для средств с видом использования СКЛАД').css('color',lighterr)
			}
			else{
			$("#acc-inv").html('03ОС_604000001').css('color',lightup1).css('background-color',lightup2)
			$("#acc-nalgr").html('03').css('color',lightup1).css('background-color',lightup2)
			$("#acc-spi").html('37').css('color',lightup1).css('background-color',lightup2)
			$("#acc-vid").html('ВНОД').css('color',lightup1).css('background-color',lightup2)
			$("#acc-group").html('Недвижимость, учитываемая по текущей стоимости').css('color',lightup1).css('background-color',lightup2)
			$("#acc-mol").html('Петров Иван Сидорович').css('color',lightup1).css('background-color',lightup2)
			$("#acc-finacc").html('61907%').css('color',lightup1).css('background-color',lightup2)
			$("#comment").append('Средству присваивается инвентарный номер, вид использования меняется на ВНОД.<br>Средство помещается на указанную группу тмц, определяющую счет учета и материально ответственное лицо.<br>Присваивается группа амортизации, определяющая срок полезного использования, но амортизация по ВНОД не начисляется.')
			}
		}
		if(this.id == 'doc-mod'){
			var vid = $("#acc-vid").html()
			if(vid != 'ЭКСПЛ' && vid != 'ВНОД'){
				$("#comment").append('Только для средств введенных в эксплуатацию!').css('color',lighterr)
			}
			else{
				$("#acc-balst").html('145,000.00').css('color',lightup1).css('background-color',lightup2)
				$("#comment").append('Увеличиваем балансовую стоимость на сумму модернизации')
			}
		}
		if(this.id == 'doc-amo-buh'){
			var vid = $("#acc-vid").html()
			if(vid != 'ЭКСПЛ'){
				$("#comment").append('Только для средств с видом использования ЭКСПЛ').css('color',lighterr)
			}
			else{
			$("#acc-amo-buh").html('312.56').css('color',lightup1).css('background-color',lightup2)
			$("#comment").append('Начисляем бухгалтерскую амортизацию')
			}
		}
		if(this.id == 'doc-amo-nal'){
			var vid = $("#acc-vid").html()
			if(vid != 'ЭКСПЛ'){
				$("#comment").append('Только для средств с видом использования ЭКСПЛ').css('color',lighterr)
			}
			else{
			$("#acc-amo-nal").html('1216.21').css('color',lightup1).css('background-color',lightup2)
			$("#comment").append('Начисляем налоговую амортизацию')
			}
		}
		if(this.id == 'doc-pered-mol'){
			var vid = $("#acc-vid").html()
			if(vid != 'ЭКСПЛ' && vid != 'ВНОД'){
				$("#comment").append('Только для средств введенных в эксплуатацию!').css('color',lighterr)
			}
			else{
				if(vid == 'ЭКСПЛ'){
					$("#acc-group").html('Основные средства ДО "3333"').css('color',lightup1).css('background-color',lightup2)
					$("#acc-mol").html('Сидорова Таьяна Васильевна').css('color',lightup1).css('background-color',lightup2)
					$("#acc-finacc").html('60401****3333%').css('color',lightup1).css('background-color',lightup2)
					$("#comment").append('Документ предназначен для смены МОЛ либо для смены МОЛ и Группы ТМЦ в рамках одного вида использования.<br>Группа ТМЦ, финансовый счет и МОЛ меняются на те, которым передаем средство.')
				}
				if(vid == 'ВНОД'){
					$("#acc-group").html('Недвижимость, учит. по текущей стоим, пер в аренду').css('color',lightup1).css('background-color',lightup2)
					$("#acc-mol").html('Петров Иван Сидорович').css('color',lightup1).css('background-color',lightup2)
					$("#acc-finacc").html('61908%').css('color',lightup1).css('background-color',lightup2)
					$("#comment").append('Документ предназначен для смены МОЛ либо для смены МОЛ и Группы ТМЦ в рамках одного вида использования.<br>Группа ТМЦ, финансовый счет и МОЛ меняются на те, которым передаем средство.')
				}
			}
		}
		if(this.id == 'doc-pered-act'){
			var vid = $("#acc-vid").html()
			if(vid != 'ЭКСПЛ' && vid != 'ВНОД'){
				$("#comment").append('Только для средств введенных в эксплуатацию!').css('color',lighterr)
			}
			else{
				if(vid == 'ЭКСПЛ'){
					$("#acc-vid").html('ВНОД').css('color',lightup1).css('background-color',lightup2)
					$("#acc-group").html('Недвижимость, учитываемая по текущей стоимости').css('color',lightup1).css('background-color',lightup2)
					$("#acc-mol").html('Петров Иван Сидорович').css('color',lightup1).css('background-color',lightup2)
					$("#acc-finacc").html('61907%').css('color',lightup1).css('background-color',lightup2)	
				}
				if(vid == 'ВНОД'){
					$("#acc-vid").html('ЭКСПЛ').css('color',lightup1).css('background-color',lightup2)
					$("#acc-group").html('Основные средства ДО "7777"').css('color',lightup1).css('background-color',lightup2)
					$("#acc-mol").html('Иванова Анна Ивановна').css('color',lightup1).css('background-color',lightup2)
					$("#acc-finacc").html('60401****7777%').css('color',lightup1).css('background-color',lightup2)
				}
				$("#comment").append('Документ предназначен для смены Группы ТМЦ со сменой вида использования.<br>Варианты:<br>ВНОД - ОС<br>ВНОД - ДАПП<br>ОС - ВНОД (пока выполняется вручную)<br>Группа ТМЦ, финансовый счет и МОЛ меняются на те, которым передаем средство.')
			}
		}
		if(this.id == 'doc-pered-dapp'){
			$("#comment").append('Документ предназначен для смены Группы ТМЦ со сменой вида использования.<br>ОС - ДАПП (пока выполняется вручную)')
		}
		if(this.id == 'doc-pereoc-os'){
			var vid = $("#acc-vid").html()
			if(vid == 'ЭКСПЛ'){
				$("#acc-balst").html('10,000.00').css('color',lightup1).css('background-color',lightup2)
				$("#comment").append('Изменяем балансовую стоимость на сумму переоценки<br>В отличие от моденизации, при переоценке балансовая стоимость может уменьшаться.')
			}
			else{
				$("#comment").append('Только для средств с видом использования ЭКСПЛ').css('color',lighterr)
			}
		}
		if(this.id == 'doc-pereoc-vnod'){
			var vid = $("#acc-vid").html()
			if(vid == 'ВНОД'){
				$("#acc-balst").html('10,000.00').css('color',lightup1).css('background-color',lightup2)
				$("#comment").append('Изменяем балансовую стоимость на сумму переоценки<br>В отличие от моденизации, при переоценке балансовая стоимость может уменьшаться.')
			}
			else{
				$("#comment").append('Только для средств с видом использования ВНОД').css('color',lighterr)
			}
		}
		if(this.id == 'doc-release'){
			var vid = $("#acc-vid").html()
			if(vid != 'ЭКСПЛ' && vid != 'ВНОД'){
				$("#comment").append('Только для средств введенных в эксплуатацию!').css('color',lighterr)
			}
			else{
				$("#acc-vid").html('ПРОДАНО').css('color',lightup1).css('background-color',lightup2)
				$("#acc-amo-buh").html('0.00').css('color',lightup1).css('background-color',lightup2)
				$("#acc-amo-nal").html('0.00').css('color',lightup1).css('background-color',lightup2)
				$("#comment").append('Вид использования меняется на ПРОДАНО<br>Также обнуляет суммы амортизации')
			}
		}
		if(this.id == 'doc-spisan'){
			var vid = $("#acc-vid").html()
			if(vid != 'ЭКСПЛ' && vid != 'ВНОД'){
				$("#comment").append('Только для средств введенных в эксплуатацию!').css('color',lighterr)
			}
			else{
				$("#acc-vid").html('СПИСАНО').css('color',lightup1).css('background-color',lightup2)
				$("#acc-amo-buh").html('0.00').css('color',lightup1).css('background-color',lightup2)
				$("#acc-amo-nal").html('0.00').css('color',lightup1).css('background-color',lightup2)
				$("#comment").append('Вид использования меняется на СПИСАНО<br>Также обнуляет суммы амортизации')
			}
		}
	}})
	$("#doc").append(matdoc)
	$("#doc-prih").css('background-color','Burlywood')
	$("#comment").html("<b>"+$("#doc-prih").html()+":</b><br>")
	$("#comment").append('Сначала создают документ прихода на склад.<br>В результате формируетcя материальный счет с уникальным номером и реквизитами:<br>Вид использования СКЛАД<br>Группа ТМЦ: ОС на складе<br>Финансовый счет тянет с Группы ТМЦ<br>МОЛ: в зависимости от местонахождения<br>Балансовая стоимость')
}
$("#footer").html('Рябченко Олег Дмитриевич, 2016')