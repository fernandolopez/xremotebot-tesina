DOCUMENTS=$(patsubst %.svg,%.pdf,$(wildcard *.svg))
DOCUMENTS+=$(patsubst %.dia,%.pdf,$(wildcard *.dia))

all: $(DOCUMENTS)

%.pdf: %.svg
	inkscape -z $< -A $@

%.svg: %.dia
	dia -e $@ $<
	sleep 10m

clean:
	rm -f $(DOCUMENTS)

.PHONY: clean
