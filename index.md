---
layout: default
---
{% for post in site.posts limit: 7 %}
  <article>
    <header>
      <h2> 
        <a href=
        {% if (post.link) %} 
          "{{ post.link }}" class="out-link"
        {% else %} 
          "{{ post.url }}"
        {% endif %}
        >{{ post.title }}</a>
      </h2>
      <p>
        <time datetime="{{ post.date | date_to_xmlschema}}">{{ post.date | date: "%Y年%m月%d日"}}</time>
        •
        <a title="固定链接" class="permalink" href="{{ post.url }}">∞</a>
      </p>
    </header>
    {{ post.content }}
  </article>
  <div class="breaker">
  ༄
  </div>
{% endfor %}
