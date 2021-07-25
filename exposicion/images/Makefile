DOCUMENTS=$(patsubst %.svg,%.pdf,$(wildcard *.svg))

all: $(DOCUMENTS)

%.pdf: %.svg
	inkscape --export-filename=$@ $<
	#../util/svg2pdf $< $@


clean:
	rm -f $(DOCUMENTS)

.PHONY: clean
