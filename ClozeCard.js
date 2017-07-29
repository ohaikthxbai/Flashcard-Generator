function clozeCard(text, cloze) {
	this.text = text;
	this.cloze = cloze;
	this.partial = this.text.replace(this.cloze, "[--SECRET!--]");
	this.fullText = this.partial.replace("[--SECRET!--]", "'" + this.cloze + "'");
}

module.exports = clozeCard;