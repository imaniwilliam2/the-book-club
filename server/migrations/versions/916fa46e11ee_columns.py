"""columns

Revision ID: 916fa46e11ee
Revises: 31eaf52a7aaa
Create Date: 2024-05-03 12:38:12.508206

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '916fa46e11ee'
down_revision = '31eaf52a7aaa'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('books', schema=None) as batch_op:
        batch_op.add_column(sa.Column('genre', sa.String(), nullable=False))
        batch_op.add_column(sa.Column('author_id', sa.Integer(), nullable=True))
        batch_op.create_foreign_key(batch_op.f('fk_books_author_id_authors'), 'authors', ['author_id'], ['id'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('books', schema=None) as batch_op:
        batch_op.drop_constraint(batch_op.f('fk_books_author_id_authors'), type_='foreignkey')
        batch_op.drop_column('author_id')
        batch_op.drop_column('genre')

    # ### end Alembic commands ###