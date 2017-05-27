DOCUMENTS=$(patsubst %.svg,%.pdf,$(wildcard *.svg))

all: $(DOCUMENTS)

%.pdf: %.svg
	../util/svg2pdf $< $@


clean:
	rm -f $(DOCUMENTS)
	rm -f *.log

.PHONY: clean
