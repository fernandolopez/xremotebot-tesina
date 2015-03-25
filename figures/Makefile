DOCUMENTS=$(patsubst %.svg,%.pdf,$(wildcard *.svg))
EPS=$(patsubst %.dia,%.eps,$(wildcard *.dia))

all: $(DOCUMENTS) $(EPS)

%.pdf: %.svg
	inkscape -z -A $@ $<

%.eps: %.dia
	dia -e $@ $<

clean:
	rm -f $(DOCUMENTS) $(EPS)

.PHONY: clean all
